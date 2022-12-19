import { z } from 'zod';

export const AuthFormSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export type AuthFormData = z.infer<typeof AuthFormSchema>;
