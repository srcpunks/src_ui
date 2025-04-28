import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card.tsx'

export default function TabsFixture() {
  return (
    <Card title="Tabs Preview" description="Preview of the tabs component.">
      <Tabs defaultValue="tab1" className="min-[400px]">
        <TabsList>
          <TabsTrigger value="tab1">first</TabsTrigger>
          <TabsTrigger value="tab2">second tab</TabsTrigger>
          <TabsTrigger value="tab3">3rd</TabsTrigger>
          <TabsTrigger value="tab4">after 3 comes 4</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab1 Content</TabsContent>
        <TabsContent value="tab2">Tab2 Content</TabsContent>
        <TabsContent value="tab3">Tab3 Content</TabsContent>
        <TabsContent value="tab4">Tab4 Content</TabsContent>
      </Tabs>
    </Card>
  )
}
