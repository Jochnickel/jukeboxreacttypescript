const timeout: { [any: string]: any } = {};
export default function DoubleClick(p: { onDoubleClick: () => any, msDelay?: number, onSingleClick?: () => any, uniqueName?: string }) {
    const i = p.uniqueName || 0;
    if (timeout[i]) {
        p.onDoubleClick();
        clearTimeout(timeout[i]);
        timeout[i] = undefined;
    } else {
        timeout[i] = setTimeout(() => {
            timeout[i] = undefined;
            p.onSingleClick && p.onSingleClick();
        }, p.msDelay || 200);
    }
}