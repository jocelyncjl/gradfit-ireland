"use client";

import Link from "next/link";
import {useState} from "react";
import type {SubmitEvent} from "react";
import {CheckCircle2, Eye, EyeOff} from "lucide-react";

const inputClassName =
    "mt-2 h-12 w-full rounded-xl border bg-white px-4 text-base text-slate-950 placeholder:text-slate-500 outline-none transition focus:ring-2 sm:h-14 sm:px-5"

type FieldErrors = {
    full_name?: string;
    email?: string;
    password?: string;
};

export function RegisterForm(){
    const [fullName, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
    const [formError, setFormError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const passwordRules = [
        {
            label: "At least 8 characters",
            valid: password.length >= 8,
        },
        {
            label: "Include a number",
            valid: /\d/.test(password),
        },
        {
            label: "Include an uppercase letter",
            valid: /[A-Z]/.test(password),
        },
    ]

    function validateForm(): FieldErrors {
        const errors: FieldErrors = {};
        const normalizedName = fullName.trim();
        const normalizedEmail = email.trim().toLowerCase();

        if (normalizedName.length < 1 || normalizedName.length > 100) {
            errors.full_name = "Please enter your full name.";
        }

        if (!normalizedEmail) {
            errors.email = "Email is required.";
        }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
            errors.email = "Please enter a valid email address.";
        }

        const passwordByteLength = new TextEncoder().encode(password).length;

        if (password.length <8) {
            errors.password = "Password must be at least 8 characters.";
        } else if (!/\d/.test(password)) {
            errors.password = "Password must include a number.";
        } else if (!/[A-Z]/.test(password)) {
            errors.password = "Password must include an uppercase letter.";
        } else if (passwordByteLength > 72) {
            errors.password = "Password must be no more than 72 bytes.";
        }

        return errors;
    }

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        setFieldErrors({});
        setFormError("");

        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/v1/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    full_name: fullName.trim(),
                    email: email.trim().toLowerCase(),
                    password: password,
                }),
            });

            const result = await response.json().catch(() => null);

            if (response.status == 201) {
                window.location.href = "/login";
                return;
            }

            if (response.status == 409) {
                setFieldErrors({
                    email: "This email address is already registered.",
                });
                return;
            }

            if (response.status == 400) {
                setFormError(
                    result?.message ?? "Please check your registration information.",
                );
                return;
            }

            setFormError("Something went wrong. Please try again later.");
        } catch {
            setFormError("Unable to connect to the server. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    }

    const getInputClassName = (hasError: boolean) => 
        `${inputClassName} ${
            hasError 
                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                : "border-slate-200 focus:border-green-600 focus:ring-green-600/20"
        }`;

    return (
        <form onSubmit={handleSubmit} noValidate className="w-full">
            {formError && (
                <div
                    role="alert"
                    className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                >
                    {formError}
                </div>
            )}

            <div>
                <label
                    htmlFor="full_name"
                    className="text-sm font-medium text-slate-950 sm:text-base"
                >
                    Full Name
                </label>

                <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(event) => setfullName(event.target.value)}
                    className={getInputClassName(Boolean(fieldErrors.full_name))}
                />
    
                {fieldErrors.full_name && (
                    <p id="full-name-error" className="mt-2 text-sm text-red-600">
                        {fieldErrors.full_name}
                    </p>
                )}
            </div>

            <div className="mt-5 sm:mt-7">
                <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-950 sm:text-base"
                >
                    Email Address
                </label>

                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={getInputClassName(Boolean(fieldErrors.full_name))}
                />

                {fieldErrors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-600">
                        {fieldErrors.email}
                    </p>
                )}
            </div>

            <div className="mt-5 sm:mt-7">
                <label
                    htmlFor="password"
                    className="text-sm font-medium text-slate-950 sm:text-base"
                >
                    Password
                </label>

                <div className="relative">
                    <input
                        id="password"
                        name="password"
                        type={passwordVisible ? "text" : "password"}
                        autoComplete="new-password"
                        placeholder="Create a password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className={`${getInputClassName(Boolean(fieldErrors.password))} pr-12 sm:pr-14`}
                    />

                    <button
                        type="button"
                        onClick={() => setPasswordVisible((visible) => !visible)}
                        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500
                        hover:text-slate-800 focus-visible:outline-2 focus-visible:outline-green-700 sm:right-4"
                    >
                        {passwordVisible ? (<EyeOff aria-hidden="true" className="h-5 w-5" />) : (<Eye aria-hidden="true" className="h-5 w-5" />)}
                    </button>
                </div>

                <ul id="password-rules" className="mt-3 space-y-2">
                    {passwordRules.map((rule) => (
                        <li
                            key={rule.label}
                            className={`flex items-start gap-3 leading-5 ${rule.valid ? "text-green-700" : "text-slate-500"}`}
                        >

                            <CheckCircle2
                                aria-hidden="true"
                                className="mt-0.5 h-4 w-4 shrink-0"
                            />

                            <span>{rule.label}</span>
                        </li>
                    ))}
                </ul>

                {fieldErrors.password && (
                    <p className="mt-2 text-sm text-red-600">{fieldErrors.password}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting} 
                className="mt-6 min-h-12 w-full rounded-xl bg-green-700 px-4 py-3 text-base font-medium text-white transition 
                hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 
                disabled:cursor-not-allowed disabled:opacity-60 sm:mt-8 sm:min-h-14 sm:text-lg"    
            >
                {isSubmitting ? "Creating account..." : "Create account"}
            </button>

            <p className="mt-5 text-center text-xs leading-6 text-slate-500 sm:mt-6 sm:text-sm">
                By creating account, you agree to our <span className="text-green-700">Terms of Service</span> and <span className="text-green-700">Privacy Policy</span>
            </p>
        </form>
    )
}




