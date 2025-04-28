import { createClient } from '@supabase/supabase-js'
const URL = "https://dnyqlycosynqpdwakocj.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRueXFseWNvc3lucXBkd2Frb2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3MDcxMDQsImV4cCI6MjA2MTI4MzEwNH0.rTxO6M_i-K1FYlBdC-MwUyMXVmBped6IRmQ0CQ-GrvM";

export const supabase = createClient(URL, API_KEY);

