"use client";
import Navigation from "@/components/Navigation";

import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";

export default function GlobalError() {
  return (
    <html>
      <body>
        <Navigation />

        <Card className="max-w-[500px] mx-auto mt-14">
          <CardFooter>
            <CardBody>
              <p className="mb-7">
                Oh, page not found! It seems like the internet is playing hide and seek with us again. Maybe it&apos;s off on a vacation, or perhaps
                it&apos;s just camera-shy. Don&apos;t worry, though; I&apos;m still here to assist you with any questions or information you need. So,
                what can I help you with today?
              </p>
              <Button color="primary" as={"a"} href="/">
                Visit Home
              </Button>
            </CardBody>
          </CardFooter>
        </Card>
      </body>
    </html>
  );
}
