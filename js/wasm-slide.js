class WasmSlide extends HTMLElement {
    states = [
        // first loop
        {
            line: null,
            stack: [],
            memory: ["H", "A", "L"],
            local: 0
        },
        {
            line: 1,
            stack: [],
            memory: [72, 65, 76],
            local: 0
        },
        {
            line: 2,
            stack: [],
            memory: [72, 65, 76],
            local: 0,
            transition: this.localToStack(0)
        },
        {
            line: 3,
            stack: [0],
            memory: [72, 65, 76],
            local: 0,
            transition: this.localToStack(1)
        },
        {
            line: 4,
            stack: [0, 0],
            memory: [72, 65, 76],
            local: 0,
            transition: this.memoryToStack(4, 0, 1)
        },
        {
            line: 5,
            stack: [0, 72],
            memory: [72, 65, 76],
            local: 0,
            transition: this.constToStack(5, 2)
        },
        {
            line: 6,
            stack: [0, 72, 1],
            memory: [72, 65, 76],
            local: 0,
            transition: this.op(6, 1, 2, 73)
        },
        {
            line: 7,
            stack: [0, 73],
            memory: [72, 65, 76],
            local: 0,
            transition: this.stackToMemory(7, 0, 1, 0)
        },
        {
            line: 8,
            stack: [],
            memory: [73, 65, 76],
            local: 0,
            transition: this.constToStack(8, 0)
        },
        {
            line: 9,
            stack: [1],
            memory: [73, 65, 76],
            local: 0,
            transition: this.localToStack(1)
        },
        {
            line: 10,
            stack: [1, 0],
            memory: [73, 65, 76],
            local: 0,
            transition: this.op(10, 0, 1, 1)
        },
        {
            line: 11,
            stack: [1],
            memory: [73, 65, 76],
            local: 0,
            transition: this.stackToLocal(0)
        },
        {
            line: 12,
            stack: [],
            memory: [73, 65, 76],
            local: 1,
            transition: this.localToStack(0)
        },
        {
            line: 13,
            stack: [1],
            memory: [73, 65, 76],
            local: 1,
            transition: this.constToStack(13, 1)
        },
        {
            line: 14,
            stack: [1, 3],
            memory: [73, 65, 76],
            local: 1,
            transition: this.op(14, 0, 1, 1)
        },
        {
            line: 15,
            stack: [1],
            memory: [73, 65, 76],
            local: 1,
            transition: this.stackToTarget1(15, 0)
        },
        {
            line: 1,
            stack: [],
            memory: [73, 65, 76],
            local: 1
        },
        // second loop
        {
            line: 2,
            stack: [],
            memory: [73, 65, 76],
            local: 1,
            transition: this.localToStack(0)
        },
        {
            line: 3,
            stack: [1],
            memory: [73, 65, 76],
            local: 1,
            transition: this.localToStack(1)
        },
        {
            line: 4,
            stack: [1, 1],
            memory: [73, 65, 76],
            local: 1,
            transition: this.memoryToStack(4, 1, 1)
        },
        {
            line: 5,
            stack: [1, 65],
            memory: [73, 65, 76],
            local: 1,
            transition: this.constToStack(5, 2)
        },
        {
            line: 6,
            stack: [1, 65, 1],
            memory: [73, 65, 76],
            local: 1,
            transition: this.op(6, 1, 2, 66)
        },
        {
            line: 7,
            stack: [1, 66],
            memory: [73, 65, 76],
            local: 1,
            transition: this.stackToMemory(7, 0, 1, 1)
        },
        {
            line: 8,
            stack: [],
            memory: [73, 66, 76],
            local: 1,
            transition: this.constToStack(8, 0)
        },
        {
            line: 9,
            stack: [1],
            memory: [73, 66, 76],
            local: 1,
            transition: this.localToStack(1)
        },
        {
            line: 10,
            stack: [1, 1],
            memory: [73, 66, 76],
            local: 1,
            transition: this.op(10, 0, 1, 2)
        },
        {
            line: 11,
            stack: [2],
            memory: [73, 66, 76],
            local: 1,
            transition: this.stackToLocal(0)
        },
        {
            line: 12,
            stack: [],
            memory: [73, 66, 76],
            local: 2,
            transition: this.localToStack(0)
        },
        {
            line: 13,
            stack: [2],
            memory: [73, 66, 76],
            local: 2,
            transition: this.constToStack(13, 1)
        },
        {
            line: 14,
            stack: [2, 3],
            memory: [73, 66, 76],
            local: 2,
            transition: this.op(14, 0, 1, 1)
        },
        {
            line: 15,
            stack: [1],
            memory: [73, 66, 76],
            local: 2,
            transition: this.stackToTarget1(15, 0)
        },
        {
            line: 1,
            stack: [],
            memory: [73, 66, 76],
            local: 2
        },
        // third loop
        {
            line: 2,
            stack: [],
            memory: [73, 66, 76],
            local: 2,
            transition: this.localToStack(0)
        },
        {
            line: 3,
            stack: [2],
            memory: [73, 66, 76],
            local: 2,
            transition: this.localToStack(1)
        },
        {
            line: 4,
            stack: [2, 2],
            memory: [73, 66, 76],
            local: 2,
            transition: this.memoryToStack(4, 2, 1)
        },
        {
            line: 5,
            stack: [2, 76],
            memory: [73, 66, 76],
            local: 2,
            transition: this.constToStack(5, 2)
        },
        {
            line: 6,
            stack: [2, 76, 1],
            memory: [73, 66, 76],
            local: 2,
            transition: this.op(6, 1, 2, 77)
        },
        {
            line: 7,
            stack: [2, 77],
            memory: [73, 66, 76],
            local: 2,
            transition: this.stackToMemory(7, 0, 1, 2)
        },
        {
            line: 8,
            stack: [],
            memory: [73, 66, 77],
            local: 2,
            transition: this.constToStack(8, 0)
        },
        {
            line: 9,
            stack: [1],
            memory: [73, 66, 77],
            local: 2,
            transition: this.localToStack(1)
        },
        {
            line: 10,
            stack: [1, 2],
            memory: [73, 66, 77],
            local: 2,
            transition: this.op(10, 0, 1, 3)
        },
        {
            line: 11,
            stack: [3],
            memory: [73, 66, 77],
            local: 2,
            transition: this.stackToLocal(0)
        },
        {
            line: 12,
            stack: [],
            memory: [73, 66, 77],
            local: 3,
            transition: this.localToStack(0)
        },
        {
            line: 13,
            stack: [3],
            memory: [73, 66, 77],
            local: 3,
            transition: this.constToStack(13, 1)
        },
        {
            line: 14,
            stack: [3, 3],
            memory: [73, 66, 77],
            local: 3,
            transition: this.op(14, 0, 1, 0)
        },
        {
            line: 15,
            stack: [0],
            memory: [73, 66, 77],
            local: 3,
            transition: this.stackToTarget1(15, 0)
        },
        {
            line: 16,
            stack: [],
            memory: [73, 66, 77],
            local: 3
        },
        {
            line: null,
            stack: [],
            memory: ["I", "B", "M"],
            local: 3
        }
    ];
    timeoutIds = [];
    step = 0

    constructor() {
        super();

        this.root = this.attachShadow({ mode: "open" });

        this.root.innerHTML = `
    <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap" rel="stylesheet">
    <style>
        :host {
            display: inline-block;
            --cell-bg-color: #def;
            --highlight-rgb: 221, 238, 255;
            --unemphasized-color: #999;
            --accent1-color: #07a;
            --accent2-color: #e90;
            --accent3-color: #905;
            all: initial;
        }

        #layout {
            background-color: white;
            display: grid;
            font-family: 'Source Code Pro', monospace;
            font-size: 22px;
            grid-column-gap: 16px;
            grid-row-gap: 16px;
            grid-template-columns: auto auto 1fr;
            grid-template-rows: auto auto 1fr;
            margin: 0 auto;
            padding: 16px;
            position: relative;
            width: -moz-fit-content;
            width: fit-content;
        }

        #memory {
            grid-column-start: 1;
            grid-column-end: 3;
        }

        nav {
            grid-column-start: 1;
            grid-column-end: 3;
        }

        .label {
            font-weight: bold;
        }

        #memory-array {
            display: grid;
            grid-template-columns: repeat(7, 36px);
            text-align: center;
        }

        #index-wrapper {
            color: var(--unemphasized-color);
            display: contents;
            font-size: smaller;
        }

        #contents-wrapper {
            display: contents;
        }

        #contents-wrapper>div {
            background-color: var(--cell-bg-color);
            margin-right: 4px;
            padding: 8px 0;
        }

        #contents-wrapper>div:nth-child(n+4) {
            color: var(--unemphasized-color);
        }

        #stack {
            display: flex;
            flex-direction: column;
            grid-row-start: 2;
            grid-row-end: 3;
        }

        #stack>div {
            background-color: var(--cell-bg-color);
            margin-bottom: 4px;
            padding: 8px 0;
            text-align: center;
            width: 36px;
        }

        #locals>div {
            margin-right: 8px;
        }

        .local-value {
            background-color: var(--cell-bg-color);
            padding: 8px 0;
            text-align: center;
            width: 36px;
        }

        #code {
            display: grid;
            grid-column-start: 2;
            grid-column-end: 4;
            grid-column-gap: 12px;
            grid-template-columns: auto, auto, 1fr;
        }

        pre {
            background-color: rgba(var(--highlight-rgb), 0);
            font-family: 'Source Code Pro', monospace;
            grid-column-start: 2;
            margin: 0;
            padding: 0 8px;
            transition: background-color .5s;
        }

        .enc {
            color: var(--unemphasized-color);
            text-align: right;
        }

        .work {
            grid-column-start: 3;
            color: var(--unemphasized-color);
            opacity: 0;
            transition: opacity .5s;
        }

        .shown {
            opacity: 1;
        }

        .keyword {
            color: var(--accent1-color);
        }

        .punctuation {
            color: var(--unemphasized-color);
        }

        .variable {
            color: var(--accent2-color);
        }

        .number {
            color: var(--accent3-color);
        }

        .highlight {
            background-color: rgb(var(--highlight-rgb));
            font-weight: bold;
        }

        .anim {
            color: var(--accent1-color);
            font-weight: bold;
            left: 0;
            opacity: 0;
            position: absolute;
            top: 0;
            transition: transform 2s ease-in-out .5s, opacity .5s;
        }
    </style>
    <div id="layout">
        <div id="memory">
            <div class="label">memory</div>
            <div id="memory-array">
                <div id="contents-wrapper">
                    <div><span>H</span></div>
                    <div><span>A</span></div>
                    <div><span>L</span></div>
                    <div>0</div>
                    <div>0</div>
                    <div>0</div>
                    <div>…</div>
                </div>
                <div id="index-wrapper">
                    <div>0</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div> </div>
                </div>
            </div>
        </div>
        <div id="stack">
            <div><span>&nbsp;</span></div>
            <div><span>&nbsp;</span></div>
            <div><span>&nbsp;</span></div>
            <div><span>&nbsp;</span></div>
            <div><span>&nbsp;</span></div>
            <div><span>&nbsp;</span></div>
        </div>
        <div id="locals">
            <div class="label">$i</div>
            <div id="l0" class="local-value"><span>0</span></div>
        </div>
        <div id="code">
            <div class="enc">03 40</div>
            <pre><span class="token keyword">loop</span> <span class="token variable">$loop</span></pre>
            <div class="work"></div>
            <div class="enc">20 00</div>
            <pre>  <span class="token keyword">local</span>.get <span class="token variable">$i</span></pre>
            <div class="work"></div>
            <div class="enc">20 00</div>
            <pre>  <span class="token keyword">local</span>.get <span class="token variable">$i</span></pre>
            <div class="work"></div>
            <div class="enc">2D 00 00</div>
            <pre>  <span class="token keyword">i32<span class="token punctuation">.</span>load8_u</span></pre>
            <div class="work">memory[<span class="target1">0</span>]</div>
            <div class="enc">41 01</div>
            <pre>  <span class="token keyword">i32<span class="token punctuation">.</span>const</span> <span class="token number">1</span></pre>
            <div class="work"></div>
            <div class="enc">6A</div>
            <pre>  <span class="token keyword">i32<span class="token punctuation">.</span>add</span></pre>
            <div class="work"><span class="target1">0</span> + <span class="target2">0</span> = <span
                    class="target3">&nbsp;</span></div>
            <div class="enc">3A 00 00</div>
            <pre>  <span class="token keyword">i32<span class="token punctuation">.</span>store8</span></pre>
            <div class="work">memory[<span class="target1">0</span>] ← <span class="target2">00</span></div>
            <div class="enc">41 01</div>
            <pre>  <span class="token keyword">i32<span class="token punctuation">.</span>const</span> <span class="token number">1</span></pre>
            <div class="work"></div>
            <div class="enc">20 00</div>
            <pre>  <span class="token keyword">local</span>.get <span class="token variable">$i</span></pre>
            <div class="work"></div>
            <div class="enc">6A</div>
            <pre>  <span class="token keyword">i32<span class="token punctuation">.</span>add</span></pre>
            <div class="work"><span class="target1">0</span> + <span class="target2">0</span> = <span
                    class="target3">&nbsp;</span></div>
            <div class="enc">21 00</div>
            <pre>  <span class="token keyword">local</span>.set <span class="token variable">$i</span></pre>
            <div class="work"></div>
            <div class="enc">20 00</div>
            <pre>  <span class="token keyword">local</span>.get <span class="token variable">$i</span></pre>
            <div class="work"></div>
            <div class="enc">41 03</div>
            <pre>  <span class="token keyword">i32<span class="token punctuation">.</span>const</span> <span class="token number">3</span></pre>
            <div class="work"></div>
            <div class="enc">49</div>
            <pre>  <span class="token keyword">i32<span class="token punctuation">.</span>lt_u</span></pre>
            <div class="work"><span class="target1">0</span> &lt; <span class="target2">0</span> = <span
                    class="target3">0</span></div>
            <div class="enc">0D 00</div>
            <pre>  <span class="token keyword">br_if</span> <span class="token variable">$loop</span></pre>
            <div class="work"><span class="target1">0</span> ≠ 0</div>
            <div class="enc">0B</div>
            <pre><span class="token keyword">end</span></pre>
            <div class="work"></div>
        </div>
        <nav>
            <button id="previous">←</button>
            <button id="next">→</button>
        </nav>
    </div>


        `;

        this.root.getElementById("next").addEventListener("click", this.next.bind(this));
        this.root.getElementById("previous").addEventListener("click", this.previous.bind(this));
        this.root.addEventListener("keydown", event => {
            if (event.key === "ArrowLeft") this.previous();
            if (event.key === "ArrowRight" || event.key === " ") this.next();
        })
    }

    next() {
        this.step = (this.step + 1) % this.states.length;
        this.doStep();
    }

    previous() {
        if (this.step > 0) this.step--;
        this.doStep();
    }

    doStep() {
        const state = this.states[this.step];
        this.killAnimations();
        this.highlightLine(state.line);
        this.setStack(state.stack);
        this.setMemory(state.memory);
        this.setLocal(state.local);

        if (state.transition) state.transition();
    }

    highlightLine(line) {
        const pres = this.root.querySelectorAll("#code pre");
        for (let pre of pres) {
            pre.classList.remove("highlight");
        }

        if (line) pres[line - 1].classList.add("highlight");
    }

    setStack(values) {
        const spans = this.root.querySelectorAll("#stack div span");
        for (let span of spans) {
            span.style.visibility = "hidden";
        }
        for (let i in values) {
            spans[spans.length - i - 1].textContent = values[i];
            spans[spans.length - i - 1].style.visibility = "visible";
        }
    }

    setMemory(values) {
        const spans = this.root.querySelectorAll("#memory-array div span");
        for (let i in values) {
            spans[i].textContent = values[i];
            spans[i].style.visibility = "visible";
        }
    }

    setLocal(value) {
        const span = this.root.querySelector("#l0 span");
        span.textContent = value;
        span.style.visibility = "visible";
    }

    localToStack(index) {
        return () => {
            const src = this.root.querySelector("#l0 span");
            const stack = this.root.querySelectorAll("#stack div span");
            const dest = stack[stack.length - index - 1];

            this.move(src, dest, false, true);
        };
    }

    stackToLocal(index) {
        return () => {
            const dest = this.root.querySelector("#l0 span");
            const stack = this.root.querySelectorAll("#stack div span");
            const src = stack[stack.length - index - 1];

            this.move(src, dest, true, true);
        };
    }

    stackToTarget1(instruction, index) {
        return () => {
            const work = this.root.querySelectorAll("#code .work")[instruction - 1];
            const dest = work.querySelector(".target1");;
            const stack = this.root.querySelectorAll("#stack div span");
            const src = stack[stack.length - index - 1];

            work.classList.add("shown");

            this.move(src, dest, true, true);
        };
    }

    memoryToStack(instruction, memoryIndex, stackIndex) {
        return () => {
            const memory = this.root.querySelectorAll("#memory-array div span");
            const src2 = memory[memoryIndex];
            const stack = this.root.querySelectorAll("#stack div span");
            const src1 = stack[stack.length - stackIndex - 1];
            const dest2 = src1;
            const work = this.root.querySelectorAll("#code .work")[instruction - 1];
            const dest1 = work.querySelector(".target1");

            work.classList.add("shown");
            this.move(src1, dest1, true, true);

            this.timeoutIds.push(setTimeout(() => {
                this.move(src2, dest2, false, true);
            }, 2500));
        };
    }

    constToStack(instruction, stackIndex) {
        return () => {
            const pres = this.root.querySelectorAll("#code pre");
            const src = pres[instruction - 1].querySelector("span.number");
            const stack = this.root.querySelectorAll("#stack div span");
            const dest = stack[stack.length - stackIndex - 1];

            this.move(src, dest, false, true);
        };
    }

    stackToMemory(instruction, index1, index2, memoryIndex) {
        return () => {
            const memory = this.root.querySelectorAll("#memory-array div span");
            const stack = this.root.querySelectorAll("#stack div span");
            const work = this.root.querySelectorAll("#code .work")[instruction - 1];
            const src1 = stack[stack.length - index1 - 1];
            const src2 = stack[stack.length - index2 - 1];
            const dest1 = work.querySelector(".target1");
            const dest2 = work.querySelector(".target2");
            const src3 = dest2;
            const dest3 = memory[memoryIndex];

            work.classList.add("shown")

            this.move(src1, dest1, true, true);
            this.move(src2, dest2, true, true);

            this.timeoutIds.push(setTimeout(() => {
                this.move(src3, dest3, true, true)
            }, 2500));
        };
    }

    op(instruction, index1, index2, result) {
        return () => {
            const stack = this.root.querySelectorAll("#stack div span");
            const src1 = stack[stack.length - index1 - 1];
            const src2 = stack[stack.length - index2 - 1];
            const work = this.root.querySelectorAll("#code .work")[instruction - 1];
            const dest1 = work.querySelector(".target1");
            const dest2 = work.querySelector(".target2");
            const src3 = work.querySelector(".target3");
            src3.textContent = " ";

            work.classList.add("shown");

            this.move(src1, dest1, true, true);
            this.move(src2, dest2, true, true);

            this.timeoutIds.push(setTimeout(() => {
                src3.textContent = result;
                this.move(src3, src1, true, true)
            }, 2500));
        }
    }

    move(src, dest, hideSrc, setDest) {
        const root = this.root.getElementById("layout");

        const span = document.createElement("span");
        span.classList.add("anim");
        span.textContent = src.textContent;
        span.style.transform = `translate(${src.offsetLeft}px, ${src.offsetTop}px)`;
        root.appendChild(span);

        dest.textContent = span.textContent
        dest.style.visibility = "hidden";

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                span.style.opacity = "1";
                span.style.transform = `translate(${dest.offsetLeft}px, ${dest.offsetTop}px)`;

                if (hideSrc) {
                    this.timeoutIds.push(setTimeout(() => src.style.visibility = "hidden", 500));
                }

                this.timeoutIds.push(setTimeout(() => {
                    span.style.opacity = "0";
                    if (setDest) {
                        dest.style.removeProperty("visibility");
                    }
                    this.timeoutIds.push(setTimeout(() => root.removeChild(span), 500));
                }, 2500));
            });
        });
    }

    killAnimations() {
        const layout = this.root.getElementById("layout");
        layout.querySelectorAll(".anim").forEach(span => layout.removeChild(span));
        layout.querySelectorAll(".work").forEach(div => div.classList.remove("shown"));
        this.timeoutIds.forEach(id => clearTimeout(id));
        this.timeoutIds = [];
    }
}

customElements.define("wasm-slide", WasmSlide);
