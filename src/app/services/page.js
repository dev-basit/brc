import { ServicesFeatured } from "@/components/services/services-featured/services-featured";
import { ServiceItem } from "@/components/services/service-item/service-item";
import { ICONS } from "@/utils";

export default function Services() {
  return (
    <>
      <ServicesFeatured />
      <ServiceItem
        heading="TRANSPORT"
        details="Lorem ipsum dolor sit amet consectetur. In diam nunc senectus tortor a. Eu eget suspendisse leo sed condimentum. Euismod nam tincidunt est cras egestas at scelerisque. Penatibus adipiscing augue arcu quam est pulvinar lacinia. Suspendisse viverra fermentum mauris lectus magna. Diam in quis sapien rutrum adipiscing. Pulvinar aliquam diam viverra vulputate a nisi. "
        imageSrc={ICONS.TRANSPORT}
      />
      <ServiceItem
        heading="MANPOWER"
        details="Lorem ipsum dolor sit amet consectetur. In diam nunc senectus tortor a. Eu eget suspendisse leo sed condimentum. Euismod nam tincidunt est cras egestas at scelerisque. Penatibus adipiscing augue arcu quam est pulvinar lacinia. Suspendisse viverra fermentum mauris lectus magna. Diam in quis sapien rutrum adipiscing. Pulvinar aliquam diam viverra vulputate a nisi. "
        imagePosition="left"
        imageSrc={ICONS.MANPOWER}
      />
      <ServiceItem
        heading="Fulfillment"
        details="Lorem ipsum dolor sit amet consectetur. In diam nunc senectus tortor a. Eu eget suspendisse leo sed condimentum. Euismod nam tincidunt est cras egestas at scelerisque. Penatibus adipiscing augue arcu quam est pulvinar lacinia. Suspendisse viverra fermentum mauris lectus magna. Diam in quis sapien rutrum adipiscing. Pulvinar aliquam diam viverra vulputate a nisi. "
        imageSrc={ICONS.FULFILLMENT}
      />
      <ServiceItem
        heading="Storage"
        details="Lorem ipsum dolor sit amet consectetur. In diam nunc senectus tortor a. Eu eget suspendisse leo sed condimentum. Euismod nam tincidunt est cras egestas at scelerisque. Penatibus adipiscing augue arcu quam est pulvinar lacinia. Suspendisse viverra fermentum mauris lectus magna. Diam in quis sapien rutrum adipiscing. Pulvinar aliquam diam viverra vulputate a nisi. "
        imagePosition="left"
        imageSrc={ICONS.STORAGE2}
      />
      <ServiceItem
        heading="Last Mile Solution"
        details="Lorem ipsum dolor sit amet consectetur. In diam nunc senectus tortor a. Eu eget suspendisse leo sed condimentum. Euismod nam tincidunt est cras egestas at scelerisque. Penatibus adipiscing augue arcu quam est pulvinar lacinia. Suspendisse viverra fermentum mauris lectus magna. Diam in quis sapien rutrum adipiscing. Pulvinar aliquam diam viverra vulputate a nisi. "
        imageSrc={ICONS.LM_SOLUTION}
      />
      <ServiceItem
        heading="Contracting"
        details="Lorem ipsum dolor sit amet consectetur. In diam nunc senectus tortor a. Eu eget suspendisse leo sed condimentum. Euismod nam tincidunt est cras egestas at scelerisque. Penatibus adipiscing augue arcu quam est pulvinar lacinia. Suspendisse viverra fermentum mauris lectus magna. Diam in quis sapien rutrum adipiscing. Pulvinar aliquam diam viverra vulputate a nisi. "
        imagePosition="left"
        imageSrc={ICONS.CONTRACTING}
      />
      <br />
      <br />
      <br />
    </>
  );
}
