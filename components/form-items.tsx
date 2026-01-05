import { Label } from "@/components/ui/label";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

interface FormItemProps {
  children: React.ReactNode;
  name: string;
  description: string;
  htmlFor: string;
  isHiddenSeparator?: boolean;
}
export default function FormItem({
  children,
  name,
  description,
  htmlFor,
  isHiddenSeparator = false,
}: Readonly<FormItemProps>) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="grid gap-2 md:grid-cols-[1fr_1fr] md:gap-8">
        <div className="space-y-1">
          <Label htmlFor={htmlFor} className="text-gray-600">
            {name}
          </Label>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        <div className="w-full md:max-w-sm md:justify-self-end">{children}</div>
      </div>
      <Separator className={cn(
        isHiddenSeparator && "hidden",
      )} />
    </div>
  );
}