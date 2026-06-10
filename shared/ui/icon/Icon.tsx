import { ComponentType } from "react";
import {
    Eye,
    EyeOff,
    LogOut,
    Sun,
    Moon,
    Monitor,
    ChevronDown,
    ChevronsUpDown,
    ChevronUp,
    GripVertical,
    ChevronsLeft,
    ChevronsRight,
    Download,
    X,
    Filter,
    Settings,
    Coffee,
    ChevronRight,
    ChevronLeft,
    Users,
    LayoutDashboard,
    Receipt,
    CircleGauge,
    Edit,
    Trash,
    Check,
    Wallet,
    CalendarDays,
    DollarSign,
    Banknote,
    CreditCard,
    ShoppingCart,
    Trash2,
    Percent,
    TrendingDown,
    ReceiptText,
    Calendar,
    PiggyBank,
    PieChart,
    Activity,
    ClipboardCheck,
    Printer,
} from "lucide-react";
import {
    IconName,
    iconNames,
    IconSize,
    iconSizes,
    IconStrokeWidth,
    iconStrokeWidths,
} from "@/shared/ui/icon/icon-constants";

interface IconComponentProps {
    size?: number;
    className?: string;
    id?: string;
    alt?: string;
    strokeWidth?: IconStrokeWidth;
}

const iconMap: Record<IconName, ComponentType<IconComponentProps>> = {
    eye: Eye,
    eyeOff: EyeOff,
    logOut: LogOut,
    sun: Sun,
    moon: Moon,
    monitor: Monitor,
    chevronDown: ChevronDown,
    chevronsUpDown: ChevronsUpDown,
    chevronUp: ChevronUp,
    gripVertical: GripVertical,
    chevronsLeft: ChevronsLeft,
    chevronLeft: ChevronLeft,
    chevronsRight: ChevronsRight,
    chevronRight: ChevronRight,
    download: Download,
    close: X,
    filter: Filter,
    settings: Settings,
    coffee: Coffee,
    users: Users,
    dashboard: LayoutDashboard,
    receipt: Receipt,
    circleGauge: CircleGauge,
    edit: Edit,
    trash: Trash,
    check: Check,
    wallet: Wallet,
    calendarDays: CalendarDays,
    dollarSign: DollarSign,
    banknote: Banknote,
    creditCard: CreditCard,
    shoppingCart: ShoppingCart,
    trash2: Trash2,
    percent: Percent,
    trendingDown: TrendingDown,
    receiptText: ReceiptText,
    calendar: Calendar,
    piggyBank: PiggyBank,
    pieChart: PieChart,
    activity: Activity,
    clipboardCheck: ClipboardCheck,
    printer: Printer,
} as const;

interface IconProps {
    name: IconName;
    id?: string;
    alt?: string;
    size?: IconSize;
    className?: string;
    strokeWidth?: IconStrokeWidth;
}

export function Icon({
    name,
    id,
    alt = iconNames[name],
    size = iconSizes.medium,
    className,
    strokeWidth = iconStrokeWidths.thin,
}: IconProps) {
    const IconComponent = iconMap[name];

    if (!IconComponent) return null;

    return <IconComponent id={id} alt={alt} size={size} className={className} strokeWidth={strokeWidth} />;
}
