import { Label } from "@/components/ui/label"
interface FormItemProps {
  children: React.ReactNode
  name: string,
  description: string
}
export default function FormItem({
  children,
  name,
  description,
}: Readonly<FormItemProps>) {

  return (
    <div>
      <Label className="w-4xl" htmlFor="city">
        <p className="text-gray-600">{name}</p>
        <p className="text-muted-foreground text-sm font-extrabold">
          {description}
          
        </p>
      </Label>
      {children}
    </div>
  )
}