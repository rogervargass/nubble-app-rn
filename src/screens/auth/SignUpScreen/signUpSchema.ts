import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{5,29}$/gim;

export const signUpSchema = z.object({
  username: z
    .string()
    .min(5, 'username muito curto')
    .regex(userNameRegex, 'username inválido')
    .toLowerCase(),
  fullName: z.string().min(5, 'nome muito curto').max(50, 'nome muito longo'),
  email: z.string().email('email inválido'),
  password: z.string().min(8, 'senha deve ter no mínimo 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
