import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createQuoteRequest, getAllQuoteRequests } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  quote: router({
    sendRequest: publicProcedure
      .input(z.object({
        companyName: z.string().min(1, "Company name is required"),
        contactPerson: z.string().min(1, "Contact person is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().optional(),
        country: z.string().optional(),
        productCategory: z.string().min(1, "Product category is required"),
        quantity: z.string().optional(),
        specifications: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          // Save to database
          await createQuoteRequest({
            companyName: input.companyName,
            contactPerson: input.contactPerson,
            email: input.email,
            phone: input.phone,
            country: input.country,
            productCategory: input.productCategory,
            quantity: input.quantity,
            specifications: input.specifications,
            status: "pending",
          });

          // Notify owner
          await notifyOwner({
            title: "New Quote Request",
            content: `New quote request from ${input.companyName} (${input.contactPerson}). Product: ${input.productCategory}. Contact: ${input.email}`,
          });

          return { success: true, message: "Quote request submitted successfully" };
        } catch (error) {
          console.error("Error creating quote request:", error);
          throw new Error("Failed to submit quote request");
        }
      }),

    getAll: publicProcedure.query(async () => {
      try {
        return await getAllQuoteRequests();
      } catch (error) {
        console.error("Error fetching quote requests:", error);
        return [];
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
