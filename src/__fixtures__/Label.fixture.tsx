import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label.tsx'

export default function LabelFixture() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  )
}
