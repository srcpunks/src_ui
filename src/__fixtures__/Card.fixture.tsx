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
import { useFixtureInput, useFixtureSelect } from 'react-cosmos/client'

export default function CardFixture() {
  const [title] = useFixtureInput('Title', 'create_project')
  const [headerSecondary] = useFixtureInput('Header secondary', '')
  const [headerDescription] = useFixtureInput(
    'Header description',
    'Deploy your new project in one-click.',
  )

  const [footerLayout] = useFixtureSelect('Footer layout', {
    options: ['two-button footer', 'one-button footer', 'no footer'],
  })

  const twoButtonFooter = {
    footerPrimary: <Button>deploy</Button>,
    footerSecondary: <Button variant="outline">cancel</Button>,
  }

  const oneButtonFooter = {
    footerPrimary: <Button>deploy</Button>,
  }

  return (
    <Card
      title={title}
      headerSecondary={headerSecondary}
      description={headerDescription}
      {...(footerLayout === 'two-button footer' && twoButtonFooter)}
      {...(footerLayout === 'one-button footer' && oneButtonFooter)}
    >
      <form className="relative z-10">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="name of your project" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Framework</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="select" />
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
