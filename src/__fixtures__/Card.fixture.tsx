import { Card } from '@/components/ui/card.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx'
import { Button } from '@/components/ui/button.tsx'
import { useFixtureSelect } from 'react-cosmos/client';

export default function CardFixture() {
  const [footerLayout] = useFixtureSelect('footer layout', {
    options: ['two-button footer', 'one-button footer'],
  });

  const twoButtonFooter = {
    primaryAction: <Button>Deploy</Button>,
    secondaryAction: <Button variant="outline">Cancel</Button>
  }

  const oneButtonFooter = {
    primaryAction: <Button>Deploy</Button>,
  }

  return (
    <Card
      title="Create project"
      description="Deploy your new project in one-click."
      className="min-w-[350px] w-fit"
      {...(footerLayout === 'two-button footer' && twoButtonFooter)}
      {...(footerLayout === 'one-button footer' && oneButtonFooter)}
    >
      <form className="relative z-10">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Framework</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="sveltekit">SvelteKit</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="nuxt">Nuxt.js</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </form>
    </Card>
  )
}
