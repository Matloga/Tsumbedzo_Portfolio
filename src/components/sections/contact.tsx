"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type FormState } from "@/app/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { Label } from "../ui/label";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export default function ContactSection() {
  const { toast } = useToast();
  const initialState: FormState = { message: "", errors: null, success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        // Consider resetting the form here
      } else if (state.errors) {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Get In Touch
            </CardTitle>
            <CardDescription className="mt-2 text-muted-foreground">
              Have a question or want to work together? Fill out the form below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your Name" required />
                {state.errors?.name && (
                  <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                {state.errors?.email && (
                  <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." required minLength={10} />
                {state.errors?.message && (
                  <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>
                )}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
