const z = require("zod");

const Form = z.object({
  username: z.string(),
  email: z
    .string()
    .email({ message: "YOU MUST" }),
});

console.log(Boolean(""));
