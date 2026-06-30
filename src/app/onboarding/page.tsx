import OnboardingForm from "../components/OnboardingForm";
import OnboardingHeader from "../components/OnboardingHeader";

export default function Page() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-sky-50 px-6">
            <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
                <OnboardingHeader />

                <OnboardingForm />

            </section>
        </main>
    );
}