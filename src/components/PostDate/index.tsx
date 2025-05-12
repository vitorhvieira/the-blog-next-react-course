import { formatDateTime, formateRelativeDate } from "@/utils/format-datetime";

type Props = {
  dateTime: string;
};

export function PostDate({ dateTime }: Props) {
  return (
    <time
      dateTime={dateTime}
      className="text-slate-600 text-sm/tight"
      title={formateRelativeDate(dateTime)}
    >
      {formatDateTime(dateTime)}
    </time>
  );
}
