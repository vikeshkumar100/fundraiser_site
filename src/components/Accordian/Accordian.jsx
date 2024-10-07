import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Accordian = () => {
    return (
        <div className="w-[95vw] mx-auto p-6 bg-gray-100 rounded-lg mb-20">
          <h2 className="text-3xl font-bold text-center mb-2">Frequently asked questions</h2>
          <p className="text-gray-600 text-center mb-6">Everything you need to know</p>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-md">
              <AccordionTrigger className="text-left font-bold px-4 py-3 text-xl">
                Is there free trial available?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 text-gray-600">
                Our free trial offers you the perfect opportunity to explore all the features and benefits of our product at no cost. Don&apos;t miss out on this chance to see how it can transform your experience!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-white rounded-md">
              <AccordionTrigger className="text-left font-bold px-4 py-3 text-xl">
                What features are included in the free trial?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 text-gray-600">
                Our free trial includes access to all core features of our product, allowing you to fully experience its capabilities before making a commitment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-white rounded-md">
              <AccordionTrigger className="text-left font-bold px-4 py-3 text-xl">
                What features are included in the free trial?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 text-gray-600">
                The free trial includes all essential features of our product, giving you a comprehensive experience of its functionality and benefits.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-white rounded-md">
              <AccordionTrigger className="text-left font-bold px-4 py-3 text-xl">
                Is there a limit to the duration of the free trial?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 text-gray-600">
                Yes, our free trial typically lasts for 14 days, giving you ample time to explore and evaluate our product thoroughly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )
}

export default Accordian