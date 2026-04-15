import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("quote.sendRequest", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should accept a valid quote request", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const validInput = {
      companyName: "Test Defense Corp",
      contactPerson: "John Doe",
      email: "john@example.com",
      phone: "+1-555-0123",
      country: "United States",
      productCategory: "ammunition",
      quantity: "1000 units",
      specifications: "7.62x39mm standard rounds",
    };

    const result = await caller.quote.sendRequest(validInput);

    expect(result).toEqual({
      success: true,
      message: "Quote request submitted successfully",
    });
  });

  it("should reject request with missing company name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const invalidInput = {
      companyName: "",
      contactPerson: "John Doe",
      email: "john@example.com",
      phone: "+1-555-0123",
      country: "United States",
      productCategory: "ammunition",
      quantity: "1000 units",
      specifications: "7.62x39mm standard rounds",
    };

    try {
      await caller.quote.sendRequest(invalidInput);
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Company name is required");
    }
  });

  it("should reject request with missing contact person", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const invalidInput = {
      companyName: "Test Defense Corp",
      contactPerson: "",
      email: "john@example.com",
      phone: "+1-555-0123",
      country: "United States",
      productCategory: "ammunition",
      quantity: "1000 units",
      specifications: "7.62x39mm standard rounds",
    };

    try {
      await caller.quote.sendRequest(invalidInput);
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Contact person is required");
    }
  });

  it("should reject request with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const invalidInput = {
      companyName: "Test Defense Corp",
      contactPerson: "John Doe",
      email: "invalid-email",
      phone: "+1-555-0123",
      country: "United States",
      productCategory: "ammunition",
      quantity: "1000 units",
      specifications: "7.62x39mm standard rounds",
    };

    try {
      await caller.quote.sendRequest(invalidInput);
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Invalid email address");
    }
  });

  it("should reject request with missing product category", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const invalidInput = {
      companyName: "Test Defense Corp",
      contactPerson: "John Doe",
      email: "john@example.com",
      phone: "+1-555-0123",
      country: "United States",
      productCategory: "",
      quantity: "1000 units",
      specifications: "7.62x39mm standard rounds",
    };

    try {
      await caller.quote.sendRequest(invalidInput);
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Product category is required");
    }
  });

  it("should accept request with optional fields omitted", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const minimalInput = {
      companyName: "Test Defense Corp",
      contactPerson: "John Doe",
      email: "john@example.com",
      productCategory: "uav",
    };

    const result = await caller.quote.sendRequest(minimalInput);

    expect(result).toEqual({
      success: true,
      message: "Quote request submitted successfully",
    });
  });

  it("should handle all product categories", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const categories = ["ammunition", "firearms", "explosives", "uav", "robotics", "tactical"];

    for (const category of categories) {
      const result = await caller.quote.sendRequest({
        companyName: "Test Defense Corp",
        contactPerson: "John Doe",
        email: "john@example.com",
        productCategory: category,
      });

      expect(result.success).toBe(true);
    }
  });
});

describe("quote.getAll", () => {
  it("should return an array of quote requests", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.quote.getAll();

    expect(Array.isArray(result)).toBe(true);
  });
});
