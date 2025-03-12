<script setup lang="ts">
import { ref } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const form = ref({
    fullName: "",
    phone: "",
    email: "",
    terms: false
});

const schema = yup.object({
    fullName: yup.string().required("Full name is required"),
    phone: yup.string().required("Phone number is required").matches(/^\d+$/, "Phone number must be digits"),
    email: yup.string().email("Invalid email format").notRequired(),
});

const onSubmit = (values: any) => {
    console.log("Form submitted:", values);
};
</script>

<template>
    <section class="bg-yellow-400 py-[80px]">
        <div class="m-auto container flex flex-col md:flex-row px-[16px] md:px-[152px] items-start gap-[40px] md:gap-[60px]">
        
            <!-- Left Image -->
            <div class="w-full w-[343px] h-[343px] md:w-[556px] md:h-[556px]">
                <img 
                    src="/images/community.jpeg" 
                    alt="Community" 
                    class="rounded-lg shadow-lg w-full h-full object-cover"
                />
            </div>

            <!-- Right Form -->
            <div class="w-full md:w-1/2">
                <h2 class="text-3xl font-semibold text-black">
                    Be part of the community
                </h2>
                <p class="text-gray-800 mt-2">
                    Join the <span class="text-blue-700 font-medium">Re:Nue</span> 
                    community and unlock a world of exclusive perks and discounts when you shop with us!
                </p>

                <!-- Form with vee-validate -->
                <Form 
                    @submit="onSubmit" 
                    :validation-schema="schema" 
                    v-slot="{ errors, values }" 
                    class="mt-6 space-y-4"
                >  
                    <div>
                        <Label for="fullName" class="text-sm">
                            Full name
                        </Label>
                        <Field 
                            name="fullName" 
                            v-model="form.fullName" 
                            placeholder="Enter your name" 
                            class="input-field bg-white" 
                        />
                        <ErrorMessage name="fullName" class="text-red-600 text-xs" />
                    </div>

                    <div>
                        <Label for="phone" class="text-sm">
                            Phone number
                        </Label>
                        <div class="flex">
                            <span class="bg-gray-200 px-4 py-2 rounded-l-[25px] flex items-center">
                                +65
                            </span>
                            <Field 
                                name="phone" 
                                v-model="form.phone" 
                                placeholder="Enter your mobile number" 
                                class="input-field !rounded-l-[0px] bg-white" 
                            />
                        </div>
                        <ErrorMessage name="phone" class="text-red-600 text-xs" />
                    </div>

                    <div>
                        <Label for="email" class="text-sm">
                            Email (optional)
                        </Label>
                        <Field 
                            name="email" 
                            v-model="form.email" 
                            placeholder="Enter your email" 
                            class="input-field bg-white" 
                        />
                        <ErrorMessage name="email" class="text-red-600 text-xs" />
                    </div>

                    <p class="text-xs text-gray-700 flex items-start gap-2">
                        <Checkbox id="terms" />
                        <Label
                            for="terms"
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            By registering, you agree that The Salvation Army may collect and use your personal data, as provided in this form, for the 
                            <TooltipProvider>
                                <Tooltip class="inline">
                                    <TooltipTrigger class="text-blue-700 underline">
                                        following purposes
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Tooltip</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            in accordance with the Personal Data Protection Act 2012.
                        </Label>
                    </p>

                    <Button 
                        type="submit" 
                        class="w-full bg-black text-white py-[20px] rounded-[25px] font-medium hover:bg-gray-800 transition"
                    >
                        Join now
                    </Button>
                </Form>
            </div>

        </div>
    </section>
</template>

<style scoped>
.input-field {
    @apply w-full px-4 py-[10px] border border-gray-300 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-blue-500;
}
</style>
