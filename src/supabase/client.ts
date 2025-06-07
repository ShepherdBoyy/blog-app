import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ovgdkbzlmupfayvfkxfe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92Z2RrYnpsbXVwZmF5dmZreGZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyMDAwMDQsImV4cCI6MjA2NDc3NjAwNH0.N6NftWjwffDIgeG36UE2u7pxi6SLlpf59GG69zoMTC0";
export const supabase = createClient(supabaseUrl, supabaseKey);
