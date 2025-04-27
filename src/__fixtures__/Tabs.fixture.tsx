import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card.tsx'

export default function TabsFixture() {
  return (
    <Card title="Tabs Preview" description="Preview of the tabs component.">
      <Tabs defaultValue="tab1" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="tab1">Tab1 Title</TabsTrigger>
          <TabsTrigger value="tab2">Tab2 Title</TabsTrigger>
          <TabsTrigger value="tab3">Tab3 Title</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab1 Content</TabsContent>
        <TabsContent value="tab2">Tab2 Content</TabsContent>
        <TabsContent value="tab3">Tab3 Content</TabsContent>
      </Tabs>
    </Card>
  )
}
