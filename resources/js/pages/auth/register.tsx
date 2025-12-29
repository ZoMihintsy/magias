import { login } from '@/routes';
import { store } from '@/routes/register';
import { Form, Head } from '@inertiajs/react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';

export default function Register() {
    return (
        <AuthLayout
            title="Create an account"
            description="Enter your details below to create your account"
        >
            <Head title="Register" />
            <Form
    {...store.form()}
    resetOnSuccess={['password', 'password_confirmation']}
    disableWhileProcessing
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
            {/* NAME */}
            <div className="flex flex-col gap-2">
                <Label
                    htmlFor="name"
                    className="text-sm font-semibold text-[#1b1b18]"
                >
                    Name
                </Label>

                <Input
                    id="name"
                    type="text"
                    required
                    autoFocus
                    tabIndex={1}
                    autoComplete="name"
                    name="name"
                    placeholder="Full name"
                    className="
                        h-12
                        rounded-xl
                        border-[#ececec]
                        bg-[#FDFDFC]
                        text-[#1b1b18]
                        placeholder:text-[#6b6b63]
                        focus:border-[#F17A2B]
                        focus:ring-4
                        focus:ring-[#F17A2B]/20
                        transition-all
                    "
                />

                <InputError message={errors.name} />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
                <Label
                    htmlFor="email"
                    className="text-sm font-semibold text-[#1b1b18]"
                >
                    Email address
                </Label>

                <Input
                    id="email"
                    type="email"
                    required
                    tabIndex={2}
                    autoComplete="email"
                    name="email"
                    placeholder="email@example.com"
                    className="
                        h-12
                        rounded-xl
                        border-[#ececec]
                        bg-[#FDFDFC]
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
            <div className="flex flex-col gap-2">
                <Label
                    htmlFor="password"
                    className="text-sm font-semibold text-[#1b1b18]"
                >
                    Password
                </Label>

                <Input
                    id="password"
                    type="password"
                    required
                    tabIndex={3}
                    autoComplete="new-password"
                    name="password"
                    placeholder="••••••••"
                    className="
                        h-12
                        rounded-xl
                        border-[#ececec]
                        bg-[#FDFDFC]
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

            {/* CONFIRM PASSWORD */}
            <div className="flex flex-col gap-2">
                <Label
                    htmlFor="password_confirmation"
                    className="text-sm font-semibold text-[#1b1b18]"
                >
                    Confirm password
                </Label>

                <Input
                    id="password_confirmation"
                    type="password"
                    required
                    tabIndex={4}
                    autoComplete="new-password"
                    name="password_confirmation"
                    placeholder="••••••••"
                    className="
                        h-12
                        rounded-xl
                        border-[#ececec]
                        bg-[#FDFDFC]
                        text-[#1b1b18]
                        placeholder:text-[#6b6b63]
                        focus:border-[#F17A2B]
                        focus:ring-4
                        focus:ring-[#F17A2B]/20
                        transition-all
                    "
                />

                <InputError message={errors.password_confirmation} />
            </div>

            {/* CTA */}
            <Button
                type="submit"
                tabIndex={5}
                data-test="register-user-button"
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
                    Create account
                </span>

                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
            </Button>

            {/* LOGIN LINK */}
            <div className="text-center text-sm text-[#6b6b63]">
                Already have an account?{' '}
                <TextLink
                    href={login()}
                    tabIndex={6}
                    className="font-semibold text-[#F17A2B] hover:underline"
                >
                    Log in
                </TextLink>
            </div>
        </>
    )}
</Form>

        </AuthLayout>
    );
}
