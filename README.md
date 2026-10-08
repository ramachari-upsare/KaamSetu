# KaamSetu

KaamSetu turns messy customer requests into tracked jobs, payment follow-ups, and reusable customer history.

## MVP
- Job inbox and pipeline
- Customers and service history
- Quick capture with structured extraction
- Quotes/invoice-style records and payment tracking
- Job Passport public-link surface
- Follow-up/reminder queue
- AC-service-first seeded demo data
- Supabase-ready multi-tenant schema

## Run
```bash
npm install
npm run dev
```

The first build runs in demo mode with browser persistence. Add Supabase environment variables and apply `supabase/schema.sql` to move to a real backend.
