-- Copy & paste this whole file into Supabase Dashboard → SQL Editor → Run

-- 1. Create the guest_messages table
create table if not exists public.guest_messages (
  id           uuid                         default gen_random_uuid() primary key,
  name         text                         not null,
  attendance   text                         not null check (attendance in ('hadir', 'tidak')),
  guests       text,
  message      text                         not null default '',
  created_at   timestamp with time zone     default now() not null
);

-- 2. Enable Row Level Security
alter table public.guest_messages enable row level security;

-- 3. Allow public read (for UcapanSection to display messages)
create policy "Public can read messages"
  on public.guest_messages
  for select
  to anon
  using (true);

-- 4. Allow public insert (for RSVPSection / MessagesContext addMessage)
create policy "Public can insert messages"
  on public.guest_messages
  for insert
  to anon
  with check (true);
