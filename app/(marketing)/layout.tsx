export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mx-auto max-w-7xl py-10">{children}</div>;
}