// app/signup/layout.tsx
export const metadata = {
  title: "Sign Up – AgriConnect",
  description: "Create your account on AgriConnect as a farmer or buyer.",
};

export const viewport = {
  colorScheme: "light",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
