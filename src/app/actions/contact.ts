"use server";

export async function submitContact(prevState: any, formData: FormData) {
    // Honeypot check
    const honeypot = formData.get("bot_field");
    if (honeypot) {
        // Silently fail for bots
        return { success: true, message: "Thank you for your inquiry." };
    }

    const name = formData.get("name");
    const phone = formData.get("phone");
    const dates = formData.get("dates");
    const guests = formData.get("guests");
    const message = formData.get("message");

    // Basic Server-side validation
    if (!name || !phone || !dates || !guests) {
        return { success: false, message: "Please fill in all required fields." };
    }

    const data = { name, phone, dates, guests, message };

    // TODO: Integrate email provider here (e.g., Resend, SendGrid)
    console.log("--- New Booking Inquiry ---");
    console.log(JSON.stringify(data, null, 2));

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return {
        success: true,
        message: "Thank you! We have received your inquiry and will contact you shortly via WhatsApp or Phone."
    };
}
