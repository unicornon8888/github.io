import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { Mail, CheckCircle } from "lucide-react";

const PRODUCT_CATEGORIES = [
  { value: "ammunition", label: "Ammunition" },
  { value: "firearms", label: "Firearms" },
  { value: "explosives", label: "Explosives" },
  { value: "uav", label: "UAV Systems" },
  { value: "robotics", label: "Robotics" },
  { value: "tactical", label: "Tactical Gear" },
];

export default function QuoteRequest() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    productCategory: "",
    quantity: "",
    specifications: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendQuoteMutation = trpc.quote.sendRequest.useMutation({
    onSuccess: () => {
      toast.success("Quote request sent successfully! We will contact you soon.");
      setSubmitted(true);
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        country: "",
        productCategory: "",
        quantity: "",
        specifications: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    },
    onError: (error: any) => {
      toast.error(error?.message || "Failed to send quote request. Please try again.");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: typeof formData) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, productCategory: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.productCategory) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      await sendQuoteMutation.mutateAsync(formData);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <CheckCircle className="w-16 h-16 text-gold mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Request Submitted</h3>
        <p className="text-steel-light text-center max-w-md">
          Thank you for your quote request. Our team will review your inquiry and contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Company Name *
            </label>
            <Input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your Company"
              className="bg-[#0d1a2e] border-border/40 text-white placeholder:text-steel"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Contact Person *
            </label>
            <Input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="Full Name"
              className="bg-[#0d1a2e] border-border/40 text-white placeholder:text-steel"
              required
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Email Address *
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="bg-[#0d1a2e] border-border/40 text-white placeholder:text-steel"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Phone Number
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="bg-[#0d1a2e] border-border/40 text-white placeholder:text-steel"
            />
          </div>
        </div>

        {/* Country and Product */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Country
            </label>
            <Input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country Name"
              className="bg-[#0d1a2e] border-border/40 text-white placeholder:text-steel"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Product Category *
            </label>
            <Select value={formData.productCategory} onValueChange={handleSelectChange}>
              <SelectTrigger className="bg-[#0d1a2e] border-border/40 text-white">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="bg-[#0d1a2e] border-border/40">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value} className="text-white">
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
            Quantity
          </label>
          <Input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g., 1000 units, 50 systems"
            className="bg-[#0d1a2e] border-border/40 text-white placeholder:text-steel"
          />
        </div>

        {/* Specifications */}
        <div>
          <label className="block text-sm font-semibold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
            Additional Specifications & Requirements
          </label>
          <Textarea
            name="specifications"
            value={formData.specifications}
            onChange={handleChange}
            placeholder="Describe your specific requirements, technical specifications, delivery timeline, or any other details..."
            className="bg-[#0d1a2e] border-border/40 text-white placeholder:text-steel min-h-[120px] resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-gold hover:bg-gold/90 text-[#0a1628] font-semibold py-3 border-2 border-gold"
            style={{ fontFamily: "var(--font-heading)", letterSpacing: "0.05em" }}
          >
            {isLoading ? (
              <>
                <span className="animate-spin mr-2">⟳</span>
                SENDING...
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 mr-2" />
                SEND QUOTE REQUEST
              </>
            )}
          </Button>
        </div>

        <p className="text-xs text-steel text-center" style={{ fontFamily: "var(--font-mono)" }}>
          Your information will be kept confidential and used only for quote purposes.
        </p>
      </form>
    </div>
  );
}
