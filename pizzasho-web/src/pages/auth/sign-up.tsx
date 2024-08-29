import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';

// Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success('Restaurante Cadastrado com Sucesso!', {
        action: {
          label: 'Login',
          onClick: () => {
            navigate('/sign-in');
            toast.dismiss();
          },
        },
      });
    } catch (error) {
      toast.error('Erro ao cadastrar Restaurante!');
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer Login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Criar Conta</h1>
            <p className="text-sm text-muted-foreground">Seja um parceiro e comece suas vendas!</p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do Estabelecimento</Label>
              <Input type="text" id="restaurantName" placeholder="Boogie Pizza" {...register('restaurantName')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Nome</Label>
              <Input type="text" id="managerName" placeholder="Boogie Jones" {...register('managerName')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input type="email" id="email" placeholder="boogie@email.com" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input type="tel" id="phone" placeholder="51991919191" {...register('phone')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar Cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <Link className="underline underline-offset-4" to="">
                Termos de Serviço
              </Link>{' '}
              e{' '}
              <Link className="underline underline-offset-4" to="">
                Política de Privacidade
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
