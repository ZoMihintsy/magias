import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: LoginProps) {
    return (
        <AuthLayout
            title="Log in to your account"
            description="Enter your email and password below to log in"
        >
            <Head title="Log in" />

            <Form
    {...store.form()}
    resetOnSuccess={['password']}
    className="
        relative
        w-full max-w-md mx-auto
        overflow-hidden
        rounded-[16px]
        border border-[#ececec]
        bg-white
        p-10
        shadow-[0_40px_80px_rgba(0,0,0,0.12)]
        before:absolute before:inset-0
        before:bg-[radial-gradient(circle_at_top,#F17A2B22,transparent_60%)]
        before:pointer-events-none
        flex flex-col gap-6
    "
>
    {({ processing, errors }) => (
        <>
            {/* EMAIL */}
            <div className="relative flex flex-col gap-2">
                <Label
                    htmlFor="email"
                    className="text-sm font-semibold text-[#1b1b18]"
                >
                    Email address
                </Label>

                <Input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoFocus
                    tabIndex={1}
                    autoComplete="email"
                    placeholder="email@example.com"
                    className="
                        peer
                        h-12
                        rounded-xl
                        border-[#ececec]
                        bg-[#FDFDFC]
                        pl-4 pr-4
                        text-[#1b1b18]
                        placeholder:text-[#6b6b63]
                        focus:border-[#F17A2B]
                        focus:ring-4
                        focus:ring-[#F17A2B]/20
                        transition-all
                    "
                />

                <InputError message={errors.email} />
            </div>

            {/* PASSWORD */}
            <div className="relative flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <Label
                        htmlFor="password"
                        className="text-sm font-semibold text-[#1b1b18]"
                    >
                        Password
                    </Label>

                    {canResetPassword && (
                        <TextLink
                            href={request()}
                            tabIndex={5}
                            className="text-sm font-medium text-[#F17A2B] hover:underline"
                        >
                            Forgot password?
                        </TextLink>
                    )}
                </div>

                <Input
                    id="password"
                    type="password"
                    name="password"
                    required
                    tabIndex={2}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className="
                        peer
                        h-12
                        rounded-xl
                        border-[#ececec]
                        bg-[#FDFDFC]
                        pl-4 pr-4
                        text-[#1b1b18]
                        placeholder:text-[#6b6b63]
                        focus:border-[#F17A2B]
                        focus:ring-4
                        focus:ring-[#F17A2B]/20
                        transition-all
                    "
                />

                <InputError message={errors.password} />
            </div>

            {/* REMEMBER */}
            <div className="flex items-center gap-3">
                <Checkbox
                    id="remember"
                    name="remember"
                    tabIndex={3}
                    className="
                        data-[state=checked]:bg-[#F17A2B]
                        data-[state=checked]:border-[#F17A2B]
                    "
                />
                <Label
                    htmlFor="remember"
                    className="text-sm text-[#6b6b63]"
                >
                    Remember me
                </Label>
            </div>

            {/* CTA */}
            <Button
                type="submit"
                tabIndex={4}
                disabled={processing}
                data-test="login-button"
                className="
                    group
                    relative
                    h-12 w-full
                    overflow-hidden
                    rounded-xl
                    bg-[#F17A2B]
                    text-white
                    font-semibold
                    tracking-wide
                    border border-transparent
                    shadow-lg
                    shadow-[#F17A2B]/40
                    transition-all
                    transition-colors
                    hover:text-black
                    hover:border-black
                    hover:shadow-xl
                    hover:shadow-[#000000]/50
                    active:scale-[0.97]
                "
            >
                <span className="relative z-10 flex items-center justify-center">
                    {processing && <Spinner className="mr-2" />}
                    Log in
                </span>

                {/* Hover glow */}
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
            </Button>

            {/* REGISTER */}
            {canRegister && (
                <div className="text-center text-sm text-[#6b6b63]">
                    Don’t have an account?{' '}
                    <TextLink
                        href={register()}
                        tabIndex={5}
                        className="font-semibold text-[#F17A2B] hover:underline"
                    >
                        Sign up
                    </TextLink>
                </div>
            )}
        </>
    )}
</Form>


            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
        </AuthLayout>
    );
}
