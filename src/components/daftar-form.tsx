"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import Link from "next/link";

const fromSchema = z.object({
  nama: z.string().max(50),
  email: z.string().email(),
  password: z.string().min(8),
});

const DaftarForm = () => {
  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      nama: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof fromSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="w-full">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto flex flex-col items-center justify-center min-h-screen bg-gray-100"
        >
          <div className="w-full max-w-sm bg-white rounded-xl p-8">
            <div className="flex flex-col mb-4">
              <h1 className="text-3xl font-bold mb-2 w-full text-center">
                Daftar Operator
              </h1>
              <p className="flex gap-1 items-center justify-center w-full text-sm text-muted-foreground">
                sudah punya akun?{" "}
                <Link href="/" className="text-red-600 font-semibold">
                  Login
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="nama"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Nama" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full rounded-full bg-red-600 text-white mt-4 hover:bg-red-500"
              >
                Daftar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default DaftarForm;
