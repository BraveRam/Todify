import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Accordions({ title,text }) {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="">{title}</AccordionTrigger>
          <AccordionContent>
            {text}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
