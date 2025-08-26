import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export function formatDate(iso: string) {
  return format(parseISO(iso), 'd MMMM yyyy', { locale: ru })
}
