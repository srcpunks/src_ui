import {
  Tabcard,
  TabcardContent,
  TabcardList,
  TabcardTrigger,
} from '@/components/ui/tabcard'

export default function TabCardFixture() {
  return (
    <Tabcard defaultValue="tab1" className="min-w-[400px]">
      <TabcardList>
        <TabcardTrigger value="tab1">first</TabcardTrigger>
        <TabcardTrigger value="tab2">second tab</TabcardTrigger>
        <TabcardTrigger value="tab3">3rd</TabcardTrigger>
        <TabcardTrigger value="tab4">after 3 comes 4</TabcardTrigger>
      </TabcardList>
      <TabcardContent value="tab1">Tab1 Content</TabcardContent>
      <TabcardContent value="tab2">Tab2 Content</TabcardContent>
      <TabcardContent value="tab3">Tab3 Content</TabcardContent>
      <TabcardContent value="tab4">Tab4 Content</TabcardContent>
    </Tabcard>
  )
}
