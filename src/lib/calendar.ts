import { invitation } from "./invitation-data";

/** Generate and trigger download of an .ics calendar file for the wedding events */
export function downloadIcsCalendar() {
  // Akad: 12 June 2027, 09:00 - 11:00 WIB (UTC+7 -> UTC 02:00 - 04:00)
  // Resepsi: 12 June 2027, 13:00 - 17:00 WIB (UTC+7 -> UTC 06:00 - 10:00)
  const icsData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Verdant Whispers Invites//ID",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:verdant-akad-20270612@verdantwhispers.com",
    "DTSTAMP:20260913T000000Z",
    "DTSTART:20270612T020000Z",
    "DTEND:20270612T040000Z",
    `SUMMARY:Akad Nikah ${invitation.groom.short} & ${invitation.bride.short}`,
    `DESCRIPTION:Akad Nikah ${invitation.groom.name} & ${invitation.bride.name} di ${invitation.events[0]?.place}`,
    `LOCATION:${invitation.events[0]?.place}, ${invitation.events[0]?.address}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "BEGIN:VEVENT",
    "UID:verdant-resepsi-20270612@verdantwhispers.com",
    "DTSTAMP:20260913T000000Z",
    "DTSTART:20270612T060000Z",
    "DTEND:20270612T100000Z",
    `SUMMARY:Resepsi Pernikahan ${invitation.groom.short} & ${invitation.bride.short}`,
    `DESCRIPTION:Resepsi Pernikahan ${invitation.groom.name} & ${invitation.bride.name} di ${invitation.events[1]?.place}`,
    `LOCATION:${invitation.events[1]?.place}, ${invitation.events[1]?.address}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Pernikahan-Gilang-Silva.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
