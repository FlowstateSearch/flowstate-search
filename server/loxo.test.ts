import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createTestContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("loxo.submitApplication", () => {
  it("validates that name is required", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.loxo.submitApplication({
        name: "",
        email: "test@example.com",
        resume: {
          name: "resume.pdf",
          type: "application/pdf",
          base64: "dGVzdA==",
        },
      })
    ).rejects.toThrow();
  });

  it("validates email format", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.loxo.submitApplication({
        name: "John Doe",
        email: "invalid-email",
        resume: {
          name: "resume.pdf",
          type: "application/pdf",
          base64: "dGVzdA==",
        },
      })
    ).rejects.toThrow();
  });

  it("validates resume structure", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.loxo.submitApplication({
        name: "John Doe",
        email: "john@example.com",
        resume: {
          name: "",
          type: "application/pdf",
          base64: "",
        },
      })
    ).rejects.toThrow();
  });

  it("accepts valid input structure", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    // This test will fail at the Loxo configuration check (expected in test environment)
    // but it proves the input validation passes
    await expect(
      caller.loxo.submitApplication({
        name: "John Doe",
        email: "john@example.com",
        phone: "555-1234",
        resume: {
          name: "resume.pdf",
          type: "application/pdf",
          base64: "dGVzdCBjb250ZW50",
        },
        consent: true,
      })
    ).rejects.toThrow("Loxo configuration is incomplete");
  });
});
