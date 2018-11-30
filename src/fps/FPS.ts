/**
 * This class calculates the number of frames thar are rendered per second.
 */
export class FPS {
    private _frames: number = 0;

    private _fps: number = 0;

    private _time: number;

    get fps(): number {
        return this._fps;
    }

    constructor() {
        this._time = this.now();
    }

    /**
     * Call this function to indicate that a new frame is rendered.
     */
    public tick(): void {
        const now: number = this.now();

        // The duration is in seconds
        const duration: number = (now - this._time) / 1000;

        this._frames += 1;
        this._fps = this._frames / duration;

        // If the duration is larger then one second, reset the duration and frame count.
        // This way the fps is calculated over a period of one second.
        if (duration > 1) {
            this._frames = 0;
            this._time = now;
        }
    }

    private now(): number {
        return window.performance.now();
    }
}
