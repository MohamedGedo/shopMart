import { checkOutAction } from "@/actions/addToCart.action";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Field, FieldGroup } from "@/Components/ui/field";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { ShippingAddress } from "@/interfaces/CartInterfaces";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";

export default function CheckOutSession({ cartId }: { cartId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const city = useRef<null | HTMLInputElement>(null);
  const details = useRef<null | HTMLInputElement>(null);
  const phone = useRef<null | HTMLInputElement>(null);
  async function checkOut() {
    setIsLoading(true);
    const shippingAddress: ShippingAddress = {
      city: city?.current?.value as string,
      details: details?.current?.value as string,
      phone: phone?.current?.value as string,
    };
    const response = await checkOutAction(cartId, shippingAddress);
    if (response.status == "success") {
      location.href = response.session.url;
    }
    setIsLoading(false);
  }
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full mt-2 py-4">CheckOut</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add Shipping Address</DialogTitle>
            <DialogDescription>
              Please , Add Your Shipping Address
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="city">City</Label>
              <Input id="city" ref={city} name="city" defaultValue="Cairo" />
            </Field>
            <Field>
              <Label htmlFor="details">Details</Label>
              <Input
                id="details"
                ref={details}
                name="details"
                defaultValue="Imbaba"
              />
            </Field>
            <Field>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                ref={phone}
                name="phone"
                defaultValue="01090318578"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading} onClick={checkOut}>
              {isLoading && <Loader2 className="animate-spin" />}
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
