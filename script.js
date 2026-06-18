const STUDY_GUIDE = [
  {
    id: "numbers",
    tag: "FOUNDATION",
    title: "Number Systems",
    why: "Embedded engineers work in decimal, binary, hex, and octal every day. Reading a register value like 0xFF or 0b10110011 must be instant.",
    topics: [
      ["Decimal (Base 10)", "Standard counting: 0-9"],
      ["Binary (Base 2)", "How CPUs actually store data: 0b1010 = 10"],
      ["Hexadecimal (Base 16)", "Register values, memory addresses: 0xFF = 255"],
      ["Octal (Base 8)", "File permissions in Linux: 0755"],
      ["Two's Complement", "How negative integers are stored in hardware"],
    ],
    examples: ["0xFF = 1111 1111 in binary = 255 in decimal", "0b1010 = 0xA = 10 in decimal", "-1 in 8-bit two's complement = 0xFF"],
    resource: "Khan Academy: Number Systems",
  },
  {
    id: "bitwise",
    tag: "CRITICAL",
    title: "Bit Manipulation",
    why: "Setting, clearing, and toggling hardware register bits is the most common embedded task. This IS your arithmetic in firmware.",
    topics: [["AND (&)", "Masking bits: clear specific bits"], ["OR (|)", "Setting bits: turn specific bits on"], ["XOR (^)", "Toggling bits: flip specific bits"], ["NOT (~)", "Inverting all bits"], ["Left shift (<<)", "Multiply by powers of 2, position bits"], ["Right shift (>>)", "Divide by powers of 2, extract bits"]],
    examples: ["Set bit 3:   reg |=  (1 << 3)   -> reg |=  0x08", "Clear bit 3: reg &= ~(1 << 3)   -> reg &= ~0x08", "Toggle bit 3:reg ^=  (1 << 3)", "Check bit 3: if (reg & (1 << 3)) { ... }"],
    resource: "Brilliant: Logic & Discrete Math",
  },
  {
    id: "algebra",
    tag: "FOUNDATION",
    title: "Algebra Essentials",
    why: "You'll rearrange equations constantly: calculating baud rates, PWM duty cycles, voltage dividers, and timer frequencies.",
    topics: [["Solving for unknowns", "Rearrange equations: f = 1/T -> T = 1/f"], ["Substitution", "Plug known values into formulas"], ["Ratios & proportions", "Scaling sensor readings, ADC values"], ["Linear equations", "y = mx + b for sensor calibration"], ["Scientific notation", "Frequencies in MHz, capacitance in pF, nF"]],
    examples: ["Baud rate formula: BR = f_clk / (16 x UBBR + 1)", "PWM duty: duty% = (compare / period) x 100", "Voltage divider: Vout = Vin x R2 / (R1 + R2)"],
    resource: "Khan Academy: Algebra 1 & 2",
  },
  {
    id: "boolean",
    tag: "CRITICAL",
    title: "Boolean Algebra & Logic Gates",
    why: "Digital logic is the bedrock of all hardware. Understanding AND, OR, NOT, and NAND helps you design state machines and decode datasheets.",
    topics: [["Truth tables", "Enumerate all input/output combinations"], ["AND / OR / NOT / NAND / NOR / XOR", "Core logic operations"], ["De Morgan's Laws", "NOT(A AND B) = NOT A OR NOT B"], ["Boolean simplification", "Reduce logic for efficiency"], ["Karnaugh Maps (K-maps)", "Simplify complex logic expressions"]],
    examples: ["De Morgan's: ~(A & B) == (~A | ~B) - used in C conditions", "State machine guard: if (!error && (state == READY))", "NAND as universal gate: any logic built from NAND only"],
    resource: "Brilliant: Logic Gates",
  },
  {
    id: "calculus",
    tag: "USEFUL",
    title: "Basic Calculus Concepts",
    why: "You don't need calculus daily, but PID controllers, filters, and ADC sampling theory all come from it. Intuition matters more than computation.",
    topics: [["Rate of change (derivative)", "How fast something changes: PID D-term"], ["Accumulation (integral)", "Sum over time: PID I-term, energy"], ["Frequency & period", "f = 1/T; waves, PWM, timers"], ["Exponential decay", "RC circuits, filter time constants"]],
    examples: ["PID: output = Kp x e + Ki x integral(e dt) + Kd x (de/dt)", "RC time constant: tau = R x C (63% charge in one tau)", "Timer frequency: f = f_clk / (prescaler x period)"],
    resource: "3Blue1Brown: Essence of Calculus",
  },
  {
    id: "fixedpoint",
    tag: "EMBEDDED SPECIFIC",
    title: "Fixed-Point Arithmetic",
    why: "Many microcontrollers have no FPU. You must represent decimals using integers. This is a core embedded skill.",
    topics: [["Q format notation", "Q8.8 = 8 bits integer + 8 bits fraction"], ["Scaling factors", "Multiply by 1000 to store 3 decimal places"], ["Overflow awareness", "Know when 8/16/32-bit integers overflow"], ["Integer division pitfalls", "5/2 = 2 in integer math, not 2.5"]],
    examples: ["Store temperature as int: 23.5 C -> 2350 (scale x100)", "Q8.8: 3.5 = 3 x 256 + 128 = 896 = 0x0380", "Avoid: float x = 0.1; (not exact in binary!)"],
    resource: "Embedded.fm blog: Fixed-Point Math",
  },
  {
    id: "modular",
    tag: "USEFUL",
    title: "Modular Arithmetic",
    why: "Ring buffers, timer wraparound, CRC checksums, and circular indexing all use modular arithmetic.",
    topics: [["Modulo operator (%)", "Remainder after division"], ["Wraparound behavior", "255 + 1 = 0 in uint8_t"], ["Ring buffer indexing", "head = (head + 1) % BUFFER_SIZE"], ["Checksums & CRC", "Error detection using mod arithmetic"]],
    examples: ["Ring buffer: idx = (idx + 1) % 16", "Timer overflow: 0xFFFF + 1 = 0x0000", "CRC-8 uses polynomial division (modular)"],
    resource: "Khan Academy: Modular Arithmetic",
  },
  {
    id: "trig",
    tag: "SITUATIONAL",
    title: "Trigonometry & Signals",
    why: "Needed for motor control, IMU sensor fusion, and signal processing. Not day-1, but important by year 2.",
    topics: [["Sine & cosine waves", "AC signals, PWM waveforms"], ["Frequency & amplitude", "Signal characterization"], ["Phase angle", "Motor control, 3-phase power"], ["Fourier basics", "FFT: decompose signals into frequencies"]],
    examples: ["sin(omega t) describes AC voltage: omega = 2 pi f", "FOC motor control uses Park/Clarke transforms", "FFT finds dominant frequency in ADC sampled data"],
    resource: "Khan Academy: Trigonometry",
  },
  {
    id: "stats",
    tag: "TINYML CORE",
    title: "Statistics & Probability",
    why: "TinyML models are trained on noisy sensor data. Mean, variance, probability, and distributions help you understand normalization, thresholds, confidence, and model behavior.",
    topics: [["Mean / median / mode", "Summarize sensor streams and datasets"], ["Variance & standard deviation", "Measure noise and spread"], ["Probability", "Interpret classifier confidence and random events"], ["Normal distribution", "Common model for noise and measurement error"], ["Sampling bias", "Know when collected data does not represent the real device environment"]],
    examples: ["Normalize sensor value: z = (x - mean) / std", "Accuracy = correct / total", "Noise floor estimated using standard deviation"],
    resource: "Khan Academy: Statistics and Probability",
  },
  {
    id: "linearalgebra",
    tag: "TINYML CORE",
    title: "Linear Algebra",
    why: "Neural networks are mostly matrix multiplication plus nonlinear functions. Vectors, matrices, dot products, and shapes are the language of TinyML inference.",
    topics: [["Vectors", "Sensor windows, feature arrays, embeddings"], ["Dot product", "Weighted sum used by neurons"], ["Matrices", "Layer weights and batched data"], ["Matrix multiplication", "Dense layers and transforms"], ["Dimensions / shapes", "Avoid tensor shape bugs in deployment"]],
    examples: ["Neuron: y = w dot x + b", "Dense layer: output = input x weights + bias", "3-axis IMU sample = vector [ax, ay, az]"],
    resource: "3Blue1Brown: Essence of Linear Algebra",
  },
  {
    id: "dsp",
    tag: "EMBEDDED ML",
    title: "DSP & Feature Extraction",
    why: "TinyML often starts with raw audio, vibration, IMU, or sensor streams. Sampling, filters, FFTs, and windows turn signals into features a small model can learn.",
    topics: [["Sampling rate", "How often the ADC or sensor captures data"], ["Nyquist rule", "Sample at least twice the highest frequency"], ["Moving average", "Simple low-pass smoothing"], ["FFT intuition", "Convert time-domain signal to frequency features"], ["Windowing", "Process fixed chunks of sensor data"]],
    examples: ["16 kHz audio captures up to 8 kHz", "Moving average of [2, 4, 6] = 4", "Spectrogram features feed keyword spotting models"],
    resource: "DSP Guide: Sampling and FFT basics",
  },
  {
    id: "control",
    tag: "EMBEDDED CORE",
    title: "Control Systems Math",
    why: "Robots, motors, heaters, drones, and sensor loops need stable control. PID and discrete-time intuition help firmware interact with the physical world.",
    topics: [["Feedback loops", "Use measured output to correct behavior"], ["Error signal", "target - measured"], ["PID terms", "Proportional, integral, derivative"], ["Stability", "Avoid oscillation and runaway control"], ["Discrete update rate", "Controllers run at fixed time steps"]],
    examples: ["P output = Kp x error", "Integral accumulates error over time", "Derivative reacts to rate of change"],
    resource: "Control Tutorials for MATLAB and Simulink: PID basics",
  },
  {
    id: "mlbasics",
    tag: "TINYML CORE",
    title: "ML Basics & Loss Functions",
    why: "Before neural networks, you need the ideas of features, labels, predictions, errors, and optimization. This is the math behind training and evaluating a model.",
    topics: [["Features and labels", "Inputs and expected outputs"], ["Loss function", "Number that measures prediction error"], ["Mean squared error", "Common regression loss"], ["Cross entropy intuition", "Common classification loss"], ["Gradient descent", "Improve parameters by moving downhill"]],
    examples: ["MSE for errors [2, -2] = 4", "Prediction error = predicted - actual", "Training minimizes loss over examples"],
    resource: "Google Machine Learning Crash Course",
  },
  {
    id: "neuralnets",
    tag: "TINYML CORE",
    title: "Neural Network Math",
    why: "TinyML deployment requires knowing what a model is doing: weighted sums, activation functions, layers, parameters, and memory cost.",
    topics: [["Neuron equation", "weighted sum plus bias"], ["Activation functions", "ReLU, sigmoid, softmax"], ["Dense layers", "Fully connected matrix math"], ["Convolutions", "Small filters sliding over input"], ["Parameter count", "Weights and biases consume flash and RAM"]],
    examples: ["ReLU(-3) = 0, ReLU(5) = 5", "Dense params = inputs x outputs + outputs", "Softmax converts logits to class probabilities"],
    resource: "TensorFlow: Neural network basics",
  },
  {
    id: "quantization",
    tag: "TINYML DEPLOY",
    title: "Quantization & Numeric Precision",
    why: "TinyML often runs int8 models on tiny microcontrollers. Quantization, scaling, clipping, and saturation decide whether a model is fast and accurate on-device.",
    topics: [["int8 ranges", "-128 to 127 signed, 0 to 255 unsigned"], ["Scale and zero-point", "Map real values to integers"], ["Clipping / saturation", "Values outside range are limited"], ["Quantization error", "Precision lost during conversion"], ["Accumulator width", "Use wider sums for many int8 multiplies"]],
    examples: ["real = scale x (q - zero_point)", "uint8 range has 256 values", "int8 dot products often accumulate in int32"],
    resource: "TensorFlow Lite: Quantization specification",
  },
  {
    id: "evaluation",
    tag: "TINYML DEPLOY",
    title: "Model Evaluation & Deployment Math",
    why: "Embedded ML is judged by accuracy, latency, memory, power, and false alarms. You need metrics math to choose a model that works on a real device.",
    topics: [["Confusion matrix", "TP, TN, FP, FN"], ["Precision and recall", "Measure false alarms and missed detections"], ["F1 score", "Balance precision and recall"], ["Latency", "Inference time per sample"], ["Memory budgeting", "Flash, RAM, tensor arena, and buffers"]],
    examples: ["Precision = TP / (TP + FP)", "Recall = TP / (TP + FN)", "Model flash budget must include weights and code"],
    resource: "TensorFlow Lite for Microcontrollers: model optimization",
  },
];

const TOPIC_ORDER_IDS = [
  "numbers",
  "bitwise",
  "boolean",
  "algebra",
  "fixedpoint",
  "modular",
  "calculus",
  "trig",
  "stats",
  "linearalgebra",
  "dsp",
  "control",
  "mlbasics",
  "neuralnets",
  "quantization",
  "evaluation",
];
STUDY_GUIDE.sort((a, b) => TOPIC_ORDER_IDS.indexOf(a.id) - TOPIC_ORDER_IDS.indexOf(b.id));

const FOUNDATIONS = [
  {
    id: "arithmetic",
    title: "Arithmetic & Number Sense",
    why: "Every embedded calculation starts here. Place value, fractions, percentages, and order of operations are used daily when converting sensor readings, computing scaling factors, and avoiding off-by-one errors.",
    topics: [
      "Place value & decimal system",
      "Order of operations (PEMDAS)",
      "Fractions, decimals, and percentages",
      "Rounding, truncation, and estimation",
    ],
    checkpoint: [
      { q: "15 + 27 = ?", a: 42, hint: "Add tens first (10+20=30), then ones (5+7=12), then total them." },
      { q: "3 x (4 + 6) = ?", a: 30, hint: "Parentheses first: 4+6=10, then 3x10=30." },
      { q: "25 percent of 200 = ?", a: 50, hint: "Percent means per hundred: 25/100 x 200 = 1/4 x 200." },
      { q: "7/8 of 24 = ?", a: 21, hint: "First find 1/8 of 24 which is 3, then multiply by 7." },
      { q: "100 - 3 x 7 = ?", a: 79, hint: "Multiply before subtracting: 3x7=21, 100-21=79." },
    ],
    resources: [
      { name: "The Organic Chemistry Tutor: Arithmetic", url: "https://youtube.com/playlist?list=PL0o_zxa4K1BUVfD9iHltDeFYrHwIqbyM7", subtitle: "Concise 1-2 hour playlist covering whole numbers, fractions, decimals, percentages, and order of operations." },
      { name: "Math Antics on YouTube", url: "https://www.youtube.com/c/mathantics", subtitle: "Short, clear animated videos (5-15 min each) on place value, fractions, and arithmetic basics." },
    ],
  },
  {
    id: "prealgebra",
    title: "Pre-Algebra & Equations",
    why: "Rearranging formulas and solving for unknowns is the most common embedded math task. Baud rates, PWM duty cycles, voltage dividers, and timer frequencies all require equation skills.",
    topics: [
      "Solving simple equations (x + a = b)",
      "Solving multiplication equations (ax = b)",
      "Using parentheses and distribution",
      "Substituting values into formulas",
      "Two-step equations (ax + b = c)",
    ],
    checkpoint: [
      { q: "x + 7 = 15, x = ?", a: 8, hint: "Subtract 7 from both sides." },
      { q: "3x = 24, x = ?", a: 8, hint: "Divide both sides by 3." },
      { q: "2(x + 3) = 14, x = ?", a: 4, hint: "Divide both sides by 2 first: x+3=7, then x=4." },
      { q: "If y = 3x + 2 and x = 5, y = ?", a: 17, hint: "Substitute: y = 3(5) + 2 = 15 + 2." },
      { q: "4x - 3 = 13, x = ?", a: 4, hint: "Add 3 to both sides: 4x=16, then divide by 4." },
    ],
    resources: [
      { name: "The Organic Chemistry Tutor: Pre-Algebra", url: "https://www.youtube.com/playlist?list=PL0o_zxa4K1BVoTlaXWFcFZ7fU3RvmFMMG", subtitle: "85-video playlist covering variables, expressions, equations, inequalities, and all pre-algebra essentials in ~1 day." },
      { name: "Math Antics on YouTube", url: "https://www.youtube.com/c/mathantics", subtitle: "Short, animated videos (5-15 min each) on algebra basics — solving equations, exponents, and graphing fundamentals." },
    ],
  },
  {
    id: "algebra",
    title: "Algebra I & Functions",
    why: "Linear functions, slopes, and quadratics appear in sensor calibration, ADC transfer functions, and acceleration curves. Function notation is the language of ML models.",
    topics: [
      "Linear equations and slope",
      "Function notation f(x)",
      "Quadratic equations (x^2)",
      "Intercepts and graphing",
      "Systems of equations",
    ],
    checkpoint: [
      { q: "Slope of line through (0,0) and (2,6) = ?", a: 3, hint: "Slope = (6-0)/(2-0) = 6/2." },
      { q: "f(x) = 2x^2, if x=3 then f(3) = ?", a: 18, hint: "2 x 3^2 = 2 x 9." },
      { q: "If x^2 = 49, positive x = ?", a: 7, hint: "What number times itself equals 49?" },
      { q: "y-intercept of y = 3x + 5 is ?", a: 5, hint: "The y-intercept is the constant term when x=0." },
      { q: "2x + 3 = 11, x = ?", a: 4, hint: "Subtract 3, then divide by 2." },
    ],
    resources: [
      { name: "The Organic Chemistry Tutor: Algebra Playlist", url: "https://www.youtube.com/playlist?list=PL0o_zxa4K1BUeF2o-MlNpbRiS-oE2Kn6J", subtitle: "264-video playlist covering linear equations, functions, quadratics, systems, and graphing — ~2 days total." },
      { name: "Math Antics on YouTube", url: "https://www.youtube.com/c/mathantics", subtitle: "Short, animated videos on algebra basics — solving equations, slope, functions, and the coordinate plane." },
    ],
  },
  {
    id: "geometry",
    title: "Geometry & Measurement",
    why: "Area, perimeter, and volume calculations are used for PCB space budgeting, enclosure design, and memory layout. Unit conversions are essential for sensor data.",
    topics: [
      "Area and perimeter of rectangles",
      "Volume of cubes and rectangular prisms",
      "Pi and circle basics",
      "Unit conversion (metric)",
      "Coordinate geometry basics",
    ],
    checkpoint: [
      { q: "Area of a 3 x 4 rectangle = ?", a: 12, hint: "Area = length x width = 3 x 4." },
      { q: "Perimeter of a 5 x 5 square = ?", a: 20, hint: "Perimeter = 4 x side = 4 x 5." },
      { q: "Pi rounded to nearest integer = ?", a: 3, hint: "Pi is approximately 3.14159." },
      { q: "Volume of a 2x2x2 cube = ?", a: 8, hint: "Volume = side^3 = 2^3." },
      { q: "1 meter = ? centimeters", a: 100, hint: "Centi means one hundredth." },
    ],
    resources: [
      { name: "The Organic Chemistry Tutor: Geometry Playlist", url: "https://www.youtube.com/playlist?list=PL0o_zxa4K1BVkRxCZubMPcCJ5Q5QwZdEM", subtitle: "142-video playlist covering area, volume, angles, triangles, circles, and coordinate geometry — ~1.5 days." },
      { name: "Math Antics on YouTube", url: "https://www.youtube.com/c/mathantics", subtitle: "Short, clear videos on geometry basics — perimeter, area, volume, circles, and the Pythagorean theorem." },
    ],
  },
  {
    id: "trig",
    title: "Trigonometry & Angles",
    why: "Trig functions describe AC signals, motor control angles, IMU orientation, and 3D rotations. Understanding sine, cosine, and angle measures is critical for sensor fusion.",
    topics: [
      "Sine and cosine at key angles",
      "Right angle measures",
      "Angle sum of triangles",
      "Degrees in a full circle",
      "Angle relationships",
    ],
    checkpoint: [
      { q: "sin(0 degrees) = ?", a: 0, hint: "At 0 degrees, the sine wave starts at 0." },
      { q: "cos(0 degrees) = ?", a: 1, hint: "At 0 degrees, cosine equals its maximum value." },
      { q: "A right angle is how many degrees?", a: 90, hint: "A right angle forms a perfect L shape." },
      { q: "A full circle has how many degrees?", a: 360, hint: "One complete rotation." },
      { q: "The three angles of a triangle sum to how many degrees?", a: 180, hint: "Triangle angle sum theorem." },
    ],
    resources: [
      { name: "The Organic Chemistry Tutor: Trigonometry Playlist", url: "https://www.youtube.com/playlist?list=PL0o_zxa4K1BVCB8iCVCGOES9pEF6byTMT", subtitle: "84-video playlist covering sine, cosine, tangent, the unit circle, identities, and polar coordinates — ~1 day." },
      { name: "Professor Dave Explains on YouTube", url: "https://www.youtube.com/@ProfessorDaveExplains", subtitle: "Concise, engaging math tutorials — find the trigonometry section for a quick, intuitive overview." },
    ],
  },
  {
    id: "precalc",
    title: "Pre-Calculus & Patterns",
    why: "Exponents, logarithms, sequences, and scientific notation are used for signal scaling, decibel calculations, sensor dynamic range, and understanding model complexity growth.",
    topics: [
      "Exponents and powers of 2",
      "Scientific notation",
      "Logarithms as inverse of exponents",
      "Number sequences and patterns",
      "Exponent rules (product of powers)",
    ],
    checkpoint: [
      { q: "2 to the power of 10 (2^10) = ?", a: 1024, hint: "2^10 = 1024. Powers of 2 show up everywhere in computing." },
      { q: "log base 2 of 64 (log2 64) = ?", a: 6, hint: "2 raised to what power equals 64?" },
      { q: "10 to the power of 6 (10^6) = ?", a: 1000000, hint: "One followed by 6 zeros." },
      { q: "Next value in sequence: 3, 6, 12, 24, ?", a: 48, hint: "Each term is doubled." },
      { q: "2^3 x 2^4 = 2 raised to what power?", a: 7, hint: "When multiplying same bases, add the exponents: 3+4." },
    ],
    resources: [
      { name: "The Organic Chemistry Tutor: Precalculus Playlist", url: "https://www.youtube.com/playlist?list=PL0o_zxa4K1BU5sTWZ2YxFhpXwsnMfMke7", subtitle: "273-video playlist covering exponents, logarithms, functions, sequences, and matrices — the bridge to calculus." },
      { name: "Professor Dave Explains on YouTube", url: "https://www.youtube.com/@ProfessorDaveExplains", subtitle: "Clear, fast-paced precalculus tutorials covering functions, exponentials, logarithms, and more." },
    ],
  },
  {
    id: "calculus",
    title: "Calculus Foundations",
    why: "Calculus intuition powers PID control, filter design, gradient descent for ML training, and understanding rate-of-change in sensor data. You need the concepts, not just the computation.",
    topics: [
      "Average rate of change",
      "Area under a curve (integral intuition)",
      "Frequency and period relationship",
      "Evaluating simple functions",
      "Slope and linear rate of change",
    ],
    checkpoint: [
      { q: "If a value changes from 2 to 12 in 2 seconds, average rate = ?", a: 5, hint: "Rate = (12-2)/2 = 10/2." },
      { q: "Area of a 4 x 5 rectangle = ?", a: 20, hint: "Area = base x height." },
      { q: "A 100 Hz signal has period in ms = ?", a: 10, hint: "Period = 1000/100 ms." },
      { q: "If f(t) = 3t and t=3, f(3) = ?", a: 9, hint: "Substitute: f(3) = 3 x 3." },
      { q: "Slope of y = 2x + 1 is ?", a: 2, hint: "In y = mx + b, m is the slope." },
    ],
    resources: [
      { name: "3Blue1Brown: Essence of Calculus", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr", subtitle: "12 beautifully animated videos (~3 hours total) building deep intuition for derivatives, integrals, and the Fundamental Theorem." },
      { name: "The Organic Chemistry Tutor: Calculus Playlist", url: "https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyV4T2Allw6zY0jEumv", subtitle: "331-video playlist covering limits, derivatives, integrals, and applications — concise explanations for each topic." },
    ],
  },
];

const CS50_WEEKS = [
  {
    id: "week0",
    title: "Week 0: Scratch",
    why: "Scratch introduces computational thinking without syntax. You learn to break problems into steps, think algorithmically, and understand how computers represent information.",
    topics: [
      "Computational thinking & problem solving",
      "Binary, decimal, hexadecimal, ASCII, Unicode",
      "Algorithms, pseudocode, running times",
      "Scratch: functions, arguments, return values",
      "Variables, boolean expressions, conditionals",
      "Loops, events, threads",
    ],
    pset: "Create an interactive story, game, or animation in Scratch",
    lectureUrl: "https://cs50.harvard.edu/college/2026/spring/weeks/0/",
    psetUrl: "https://cs50.harvard.edu/college/2026/spring/psets/0/",
    videoUrl: "https://youtube.com/playlist?list=PLhQjrBD2T380hlTqAU8HfvVepCcjCqTg6",
  },
  {
    id: "week1",
    title: "Week 1: C",
    why: "C teaches how computers actually work under the hood. Memory, types, and compilation are essential for embedded systems, operating systems, and high-performance code.",
    topics: [
      "C syntax: variables, types, operators",
      "Conditionals, loops, and expressions",
      "Compilers: source code to machine code",
      "Command-line interface (CLI) & Linux",
      "Integer overflow & floating-point imprecision",
      "Manual pages, header files, libraries",
    ],
    pset: "Hello (print), Mario (pyramids), Cash/Credit (algorithm implementation in C)",
    lectureUrl: "https://cs50.harvard.edu/college/2026/spring/weeks/1/",
    psetUrl: "https://cs50.harvard.edu/college/2026/spring/psets/1/",
    videoUrl: "https://youtube.com/playlist?list=PLhQjrBD2T380hlTqAU8HfvVepCcjCqTg6",
  },
  {
    id: "week2",
    title: "Week 2: Arrays",
    why: "Arrays, strings, and debugging are fundamental to every programming language. Understanding the compilation process helps you write correct, efficient code.",
    topics: [
      "Preprocessing, compiling, assembling, linking",
      "Debugging with debuggers and print statements",
      "Arrays: contiguous memory, indexing",
      "Strings as char arrays (null-terminated)",
      "Command-line arguments (argc, argv)",
      "Cryptography basics: ciphers and keys",
    ],
    pset: "Readability (grade level), Caesar (shift cipher), Substitution (substitution cipher)",
    lectureUrl: "https://cs50.harvard.edu/college/2026/spring/weeks/2/",
    psetUrl: "https://cs50.harvard.edu/college/2026/spring/psets/2/",
    videoUrl: "https://youtube.com/playlist?list=PLhQjrBD2T380hlTqAU8HfvVepCcjCqTg6",
  },
  {
    id: "week3",
    title: "Week 3: Algorithms",
    why: "Algorithm design and analysis is the core of computer science. Big O notation, searching, and sorting teach you how to write efficient code that scales.",
    topics: [
      "Linear search & binary search",
      "Bubble sort, selection sort, merge sort",
      "Asymptotic notation: O, Omega, Theta",
      "Recursion: functions calling themselves",
      "Comparing algorithm running times",
      "Algorithmic thinking and problem decomposition",
    ],
    pset: "Plurality (election simulation), Runoff/Tideman (ranked-choice voting)",
    lectureUrl: "https://cs50.harvard.edu/college/2026/spring/weeks/3/",
    psetUrl: "https://cs50.harvard.edu/college/2026/spring/psets/3/",
    videoUrl: "https://youtube.com/playlist?list=PLhQjrBD2T380hlTqAU8HfvVepCcjCqTg6",
  },
  {
    id: "week4",
    title: "Week 4: Memory",
    why: "Pointers and memory management are what separate C from higher-level languages. Understanding the stack, heap, and file I/O is essential for systems programming.",
    topics: [
      "Pointers: addresses, dereferencing, pointer arithmetic",
      "Segmentation faults and memory errors",
      "Dynamic memory allocation: malloc, free",
      "Stack vs heap memory layout",
      "Buffer overflow and security implications",
      "File I/O: reading and writing files, images (BMP)",
    ],
    pset: "Filter (image filters: grayscale, blur, edges), Recover (recover JPEGs from raw data)",
    lectureUrl: "https://cs50.harvard.edu/college/2026/spring/weeks/4/",
    psetUrl: "https://cs50.harvard.edu/college/2026/spring/psets/4/",
    videoUrl: "https://youtube.com/playlist?list=PLhQjrBD2T380hlTqAU8HfvVepCcjCqTg6",
  },
  {
    id: "week5",
    title: "Week 5: Data Structures",
    why: "Data structures are the building blocks of efficient programs. Hash tables, linked lists, and trees appear in databases, operating systems, and every large-scale application.",
    topics: [
      "Abstract data types (ADTs)",
      "Queues and stacks: FIFO and LIFO",
      "Singly and doubly linked lists",
      "Trees and binary search trees (BSTs)",
      "Hash tables: hash functions, collisions",
      "Tries: prefix trees for string storage",
    ],
    pset: "Speller: implement a fast spell checker using a hash table",
    lectureUrl: "https://cs50.harvard.edu/college/2026/spring/weeks/5/",
    psetUrl: "https://cs50.harvard.edu/college/2026/spring/psets/5/",
    videoUrl: "https://youtube.com/playlist?list=PLhQjrBD2T380hlTqAU8HfvVepCcjCqTg6",
  },
];

const CS50_QUIZZES = {
  week0: [
    { q: "How many unique values can 1 bit represent?", a: 2, hint: "One bit can be either 0 or 1." },
    { q: "Convert binary 1010 to decimal.", a: 10, hint: "1x8 + 0x4 + 1x2 + 0x1." },
    { q: "How many bits are in 2 bytes?", a: 16, hint: "1 byte = 8 bits." },
    { q: "A repeat loop runs 5 times, counter starts at 0 and increments by 1 each time. Final counter = ?", a: 5, hint: "0 + 1 + 1 + 1 + 1 + 1." },
    { q: "What is the decimal value of hex 0x0F?", a: 15, hint: "0x0F = 0*16 + 15." },
  ],
  week1: [
    { q: "In C, what is the integer result of 5 / 2?", a: 2, hint: "Integer division truncates the decimal part." },
    { q: "sizeof(char) in standard C returns what value?", a: 1, hint: "A char is always 1 byte." },
    { q: "How many bits are in a standard byte?", a: 8, hint: "A byte contains 8 bits." },
    { q: "If uint8_t x = 255 and we add 1, what is the result?", a: 0, hint: "Unsigned 8-bit overflow wraps around." },
    { q: "A program takes 3 command-line arguments including program name. argc = ?", a: 3, hint: "argc includes the program name itself." },
  ],
  week2: [
    { q: "What is the index of the first element in a C array?", a: 0, hint: "C arrays are zero-indexed." },
    { q: "How many bytes does the string 'hi' occupy including null terminator?", a: 3, hint: "h + i + null = 3 bytes." },
    { q: "If char s[] = 'abc', what is s[0]? (Enter ASCII code of 'a')", a: 97, hint: "ASCII 'a' has decimal value 97." },
    { q: "If argc is 5, how many arguments were passed (excluding program name)?", a: 4, hint: "argc minus 1." },
    { q: "A buffer of 10 chars holds at most how many visible characters (excluding null)?", a: 9, hint: "One slot is needed for the null terminator." },
  ],
  week3: [
    { q: "Linear search worst-case comparisons for n = 1000 items = ?", a: 1000, hint: "You might check every single item." },
    { q: "What is log base 2 of 64?", a: 6, hint: "2 raised to what power equals 64?" },
    { q: "Binary search max comparisons for 256 sorted items = ?", a: 8, hint: "log2(256) = 8." },
    { q: "Factorial 5! = ?", a: 120, hint: "5 x 4 x 3 x 2 x 1." },
    { q: "What is log2(1024)?", a: 10, hint: "1024 = 2^10." },
  ],
  week4: [
    { q: "malloc(8) allocates how many bytes on the heap?", a: 8, hint: "malloc takes the number of bytes requested." },
    { q: "sizeof(int) on a typical 32-bit system is how many bytes?", a: 4, hint: "A standard int is 4 bytes (32 bits)." },
    { q: "A pointer on a 64-bit system is how many bytes?", a: 8, hint: "64-bit addresses need 8 bytes." },
    { q: "If int x = 42 and int* p = &x, what does *p equal?", a: 42, hint: "Dereferencing p gives the value of x." },
    { q: "How many bytes for an array of 10 ints (32-bit)?", a: 40, hint: "10 x 4 bytes." },
  ],
  week5: [
    { q: "A queue enqueues 1, 2, 3. First dequeue returns ?", a: 1, hint: "Queue is FIFO: first in, first out." },
    { q: "A stack pushes 1 then 2. Pop returns ?", a: 2, hint: "Stack is LIFO: last in, first out." },
    { q: "Hash table of 10 slots, hash(key) = key % 10. Where does key 23 go?", a: 3, hint: "23 % 10." },
    { q: "Singly linked list node has how many pointer fields?", a: 1, hint: "It points to the next node." },
    { q: "How many children can a binary tree node have at most?", a: 2, hint: "Binary means at most two children." },
  ],
};

const CS50_LEVELS = ["Easy", "Intermediate", "Advanced"];

function isCS50DifficultyUnlocked(difficulty) {
  if (difficulty === "Easy") return true;
  const prevLevel = difficulty === "Advanced" ? "Intermediate" : "Easy";
  return CS50_WEEKS.every((week) => {
    const key = `${prevLevel}::cs50::${week.id}`;
    return (state.cs50Progress[key] || 0) >= 80;
  });
}

function makeCS50GeneratedQuestion(id, weekId, difficulty, n) {
  const easy = difficulty === "Easy";
  const a = (n % 5) + 1;
  const b = ((n * 3) % 7) + 1;
  switch (weekId) {
    case "week0":
      if (easy) {
        if (n % 4 === 0) return { id, q: `${a} + ${b} = ?`, a: a + b, hint: "Add the numbers." };
        if (n % 4 === 1) return { id, q: `What is ${a} in binary? (enter decimal value)`, a: a, hint: "The value stays the same." };
        if (n % 4 === 2) return { id, q: `How many bits in ${a} bytes?`, a: a * 8, hint: "1 byte = 8 bits." };
        return { id, q: `What is ${a}0 in decimal?`, a: a * 10, hint: "Tens place." };
      }
      if (n % 4 === 0) return { id, q: `What is the decimal value of hex 0x${a}${b}?`, a: a * 16 + b, hint: "Hex digits: first x16 + second." };
      if (n % 4 === 1) return { id, q: `A loop runs ${a * 3} times, counter starts at 0, increments by 1. Final counter?`, a: a * 3, hint: "Starting at 0, increment each iteration." };
      if (n % 4 === 2) return { id, q: `Convert binary ${a}${b}${(a + b) % 2}${b % 2} to decimal.`, a: a * 8 + b * 4 + ((a + b) % 2) * 2 + (b % 2), hint: "Multiply each bit by its place value." };
      return { id, q: `${a} MB = ? bytes (in millions)`, a: a, hint: "MB means million bytes." };
    case "week1":
      if (easy) {
        if (n % 4 === 0) return { id, q: `${a} x ${b} = ?`, a: a * b, hint: "Multiply." };
        if (n % 4 === 1) return { id, q: `5 / 2 integer division = ?`, a: 2, hint: "Integer division truncates." };
        if (n % 4 === 2) return { id, q: `${a} + ${b} = ?`, a: a + b, hint: "Add them." };
        return { id, q: `char uses how many bytes?`, a: 1, hint: "1 byte." };
      }
      if (n % 4 === 0) return { id, q: `int x = ${a} / ${b}; In C, x = ?`, a: Math.floor(a / b), hint: "Integer division truncates." };
      if (n % 4 === 1) return { id, q: `int arr[${a}]; sizeof(arr) on 32-bit = ?`, a: a * 4, hint: "int is 4 bytes on 32-bit." };
      if (n % 4 === 2) return { id, q: `uint8_t x = ${250 + a}; x += ${b}; x = ?`, a: (250 + a + b) % 256, hint: "uint8 wraps at 256." };
      return { id, q: `argc is ${a + 3}. How many user arguments (excluding program name)?`, a: a + 2, hint: "argc minus 1." };
    case "week2":
      if (easy) {
        if (n % 4 === 0) return { id, q: `First index of an array is?`, a: 0, hint: "Arrays start at 0." };
        if (n % 4 === 1) return { id, q: `A string 'ab' has how many chars (including null)?`, a: 3, hint: "a + b + null." };
        if (n % 4 === 2) return { id, q: `char s[] = "a"; s[0] ASCII = ?`, a: 97, hint: "ASCII 'a' is 97." };
        return { id, q: `An array of ${a} ints uses ${a * 4} bytes (32-bit). True? 1=yes, 0=no`, a: 1, hint: `${a} x 4 = ${a * 4}.` };
      }
      if (n % 4 === 0) return { id, q: `int arr[${a}] = {${b}}; arr[0] = ?`, a: b, hint: `First element is ${b}.` };
      if (n % 4 === 1) return { id, q: `char s[] = "hello"; strlen(s) = ?`, a: 5, hint: "strlen counts chars before null." };
      if (n % 4 === 2) return { id, q: `argc=${a + 2}. argv[0] is program name. argv[${a}] is the ?th argument`, a: a + 1, hint: "Index equals argument position." };
      return { id, q: `Buffer ${a * 2} bytes. Max visible chars (excl null)?`, a: a * 2 - 1, hint: "One byte reserved for null." };
    case "week3":
      if (easy) {
        if (n % 4 === 0) return { id, q: `Sorted list of ${a * 10} items, linear search worst-case = ?`, a: a * 10, hint: "Could check every item." };
        if (n % 4 === 1) return { id, q: `What is 2^${a}?`, a: 2 ** a, hint: `2 raised to ${a}.` };
        if (n % 4 === 2) return { id, q: `${a}! = ${a} x ${a - 1} x ... x 1. ${a}! = ?`, a: a <= 3 ? 6 : 120, hint: "Multiply from 1 to a." };
        return { id, q: `Is 2^3 = 8? (1=yes, 0=no)`, a: 1, hint: "2x2x2 = 8." };
      }
      if (n % 4 === 0) return { id, q: `Binary search max comparisons for ${2 ** (a + 3)} items = ?`, a: a + 3, hint: "log2(n)." };
      if (n % 4 === 1) return { id, q: `Merge sort ${a * 2} items. Comparisons? O(nlogn). log2(${a * 2}) rounded = ?`, a: Math.ceil(Math.log2(a * 2)), hint: "n log n." };
      if (n % 4 === 2) return { id, q: `Omega(1) means constant? (1=yes,0=no)`, a: 1, hint: "Omega(1) is constant lower bound." };
      return { id, q: `Theta(n) for ${a * 10} items gives about how many operations?`, a: a * 10, hint: "Theta(n) = proportional to n." };
    case "week4":
      if (easy) {
        if (n % 4 === 0) return { id, q: `malloc(${a * 4}) allocates how many bytes?`, a: a * 4, hint: "malloc returns requested bytes." };
        if (n % 4 === 1) return { id, q: `sizeof(int) on 32-bit = ? bytes`, a: 4, hint: "int is 4 bytes." };
        if (n % 4 === 2) return { id, q: `A pointer stores a memory ? (1=address,0=value)`, a: 1, hint: "Pointer stores address." };
        return { id, q: `int ${a} ints in array x ${b} bytes each = total?`, a: a * b, hint: "Multiply." };
      }
      if (n % 4 === 0) return { id, q: `int* p = malloc(${a * 10}); if !p, the return value is? (address)`, a: 0, hint: "NULL = 0." };
      if (n % 4 === 1) return { id, q: `int x = ${a}; int* p = &x; *p = ${b}; x = ?`, a: b, hint: "Dereference changes x." };
      if (n % 4 === 2) return { id, q: `char buf[${a}]; gets(buf) risk: how many bytes overflow if input is ${a + 5} chars?`, a: 5, hint: "Extra bytes beyond buffer." };
      return { id, q: `sizeof(double) on most systems = ?`, a: 8, hint: "double is 8 bytes." };
    case "week5":
      if (easy) {
        if (n % 4 === 0) return { id, q: `Queue: enqueue 1, enqueue 2, dequeue = ?`, a: 1, hint: "FIFO: first in, first out." };
        if (n % 4 === 1) return { id, q: `Stack: push 1, push 2, pop = ?`, a: 2, hint: "LIFO: last in, first out." };
        if (n % 4 === 2) return { id, q: `Hash: key % ${a} maps key ${a * 2} to slot?`, a: 0, hint: `${a * 2} % ${a} = 0.` };
        return { id, q: `Binary tree node max children = ?`, a: 2, hint: "Binary = at most 2." };
      }
      if (n % 4 === 0) return { id, q: `Hash table ${a} slots. Key ${a * a + b} goes to slot?`, a: (a * a + b) % a, hint: "key % slots." };
      if (n % 4 === 1) return { id, q: `Singly linked list traversal from head to tail is O(?)`, a: a <= 3 ? 3 : 4, hint: "1=O(1),2=O(log n),3=O(n),4=O(n^2)" };
      if (n % 4 === 2) return { id, q: `BST with ${a * 4} nodes, search worst-case with no rebalancing = O(?)`, a: a * 4, hint: "Unbalanced can be O(n)." };
      return { id, q: `Trie storing ${a} words of avg length ${b} has roughly how many nodes?`, a: a * b, hint: "words x avg length." };
    default:
      return { id, q: `${a} + ${b} = ?`, a: a + b, hint: "Add the numbers." };
  }
}

function getCS50Quiz(weekId, difficulty) {
  const base = CS50_QUIZZES[weekId] || [];
  if (difficulty === "Intermediate") return base.map((q, i) => ({ ...q, id: `cs50-int-${weekId}-${i}` }));
  const generated = [];
  for (let i = 1; i <= 10; i += 1) {
    generated.push(makeCS50GeneratedQuestion(30000 + i, weekId, difficulty, i));
  }
  return generated;
}

const GUIDE_TO_QUIZ_TOPIC = {
  numbers: "Number Systems",
  bitwise: "Bit Manipulation",
  algebra: "Algebra",
  boolean: "Boolean Logic",
  calculus: "Calculus Concepts",
  fixedpoint: "Fixed-Point",
  modular: "Modular Arithmetic",
  trig: "Trigonometry & Signals",
  stats: "Statistics & Probability",
  linearalgebra: "Linear Algebra",
  dsp: "DSP & Feature Extraction",
  control: "Control Systems Math",
  mlbasics: "ML Basics & Loss Functions",
  neuralnets: "Neural Network Math",
  quantization: "Quantization & Numeric Precision",
  evaluation: "Model Evaluation & Deployment Math",
};

const BASE_QUIZ_BANK = [
  [1, "Number Systems", 1, "What is 0xFF in decimal?", 255, "F in hex = 15. FF = 15 x 16 + 15"],
  [2, "Number Systems", 1, "What is 0b1010 in decimal?", 10, "1 x 8 + 0 x 4 + 1 x 2 + 0 x 1"],
  [3, "Number Systems", 2, "What is 255 in hexadecimal? Enter the decimal value of 0xFF.", 255, "FF hex = 255 decimal"],
  [4, "Number Systems", 2, "0b11111111 in decimal = ?", 255, "All 8 bits set = 2^8 - 1"],
  [5, "Number Systems", 3, "What is -1 in 8-bit two's complement as unsigned decimal?", 255, "Invert 00000001, add 1 = 11111111 = 255"],
  [6, "Bit Manipulation", 1, "0b1100 & 0b1010 = ? in decimal", 8, "AND: both bits must be 1. 1000 = 8"],
  [7, "Bit Manipulation", 1, "0b1100 | 0b0011 = ? in decimal", 15, "OR: either bit is 1. 1111 = 15"],
  [8, "Bit Manipulation", 2, "1 << 3 = ? in decimal", 8, "Shift 1 left by 3 = 0b1000 = 8"],
  [9, "Bit Manipulation", 2, "0xFF & ~(1 << 4) = ? Answer in decimal.", 239, "~(1<<4) = ~0x10 = 0xEF. 0xFF & 0xEF = 239"],
  [10, "Bit Manipulation", 3, "0b10110000 >> 4 = ? in decimal", 11, "Shift right 4: 0b1011 = 11"],
  [11, "Algebra", 1, "If f = 1/T and T = 0.001s, what is f in Hz?", 1000, "1 / 0.001 = 1000"],
  [12, "Algebra", 1, "PWM duty: compare=128, period=256. Duty% = ?", 50, "(128/256) x 100 = 50%"],
  [13, "Algebra", 2, "Voltage divider: Vin=5V, R1=R2. Vout rounded down = ?", 2, "Equal resistors = half voltage. 5/2 = 2.5, rounded down is 2"],
  [14, "Algebra", 2, "Timer: f_clk=16MHz, prescaler=8, period=250. Frequency = ? Hz", 8000, "16,000,000 / (8 x 250) = 8000"],
  [15, "Algebra", 3, "ADC: 10-bit, Vref=3.3V, reading=512. Voltage in mV rounded = ?", 1648, "(512/1023) x 3300 is about 1648"],
  [16, "Boolean Logic", 1, "TRUE AND FALSE = ? Use 1=true, 0=false.", 0, "Both must be true for AND to be true"],
  [17, "Boolean Logic", 1, "TRUE OR FALSE = ? Use 1=true, 0=false.", 1, "Either true = OR is true"],
  [18, "Boolean Logic", 2, "NOT(1 AND 1) = ? This is NAND.", 0, "1 AND 1 = 1, NOT 1 = 0"],
  [19, "Boolean Logic", 2, "De Morgan's: NOT(A OR B) = NOT A __ NOT B. Answer 1=AND, 2=OR.", 1, "NOT(A OR B) = NOT A AND NOT B"],
  [20, "Boolean Logic", 3, "XOR: 0b1010 ^ 0b1100 = ? in decimal", 6, "XOR: 0110 = 6"],
  [21, "Fixed-Point", 1, "Store 3.75 C as integer scaled by 100. Answer = ?", 375, "3.75 x 100 = 375"],
  [22, "Fixed-Point", 2, "In C: int x = 5 / 2; What is x?", 2, "Integer division truncates. 5/2 = 2"],
  [23, "Fixed-Point", 2, "uint8_t x = 255; x = x + 1; What is x?", 0, "Unsigned 8-bit overflow wraps to 0"],
  [24, "Fixed-Point", 3, "Max value of uint16_t = ?", 65535, "2^16 - 1 = 65535"],
  [25, "Modular Arithmetic", 1, "17 % 5 = ?", 2, "17 = 3 x 5 + 2"],
  [26, "Modular Arithmetic", 1, "Ring buffer size=8, current head=7. Next head = (7+1)%8 = ?", 0, "8 % 8 = 0"],
  [27, "Modular Arithmetic", 2, "256 % 16 = ?", 0, "256 = 16 x 16 exactly"],
  [28, "Modular Arithmetic", 2, "Timer counts 0-999. At 75% duty, compare register value = ?", 750, "75% of 1000 = 750"],
  [29, "Calculus Concepts", 2, "RC circuit: R=1k ohm, C=1uF. Time constant in microseconds = ?", 1000, "1000 ohm x 0.000001 F = 0.001s = 1000 us"],
  [30, "Calculus Concepts", 3, "PID: error=10, Kp=2, Ki=0, Kd=0. P-term output = ?", 20, "P-term = Kp x error = 20"],
  [31, "Trigonometry & Signals", 1, "If a sine wave has frequency 50 Hz, what is its period in milliseconds?", 20, "T = 1/f = 1/50 = 0.02s = 20ms"],
  [32, "Trigonometry & Signals", 1, "A signal ranges from -3V to +3V. What is its amplitude in volts?", 3, "Amplitude is measured from center to peak"],
  [33, "Trigonometry & Signals", 2, "A full cycle is how many degrees?", 360, "One complete rotation or wave cycle is 360 degrees"],
  [34, "Trigonometry & Signals", 2, "If f = 1000 Hz, what is omega rounded to the nearest integer? Use omega = 2*pi*f.", 6283, "2 x 3.14159 x 1000 is about 6283"],
  [35, "Trigonometry & Signals", 2, "A 1 kHz signal sampled at 10 kHz gives how many samples per cycle?", 10, "10,000 samples/sec divided by 1,000 cycles/sec = 10"],
  [36, "Trigonometry & Signals", 3, "Three-phase electrical signals are separated by how many degrees?", 120, "360 degrees divided by 3 phases = 120"],
  [37, "Trigonometry & Signals", 3, "A PWM signal at 20 kHz has a period of how many microseconds?", 50, "1/20000 = 0.00005s = 50us"],
  [38, "Trigonometry & Signals", 3, "If sin(theta)=0 at theta=0 degrees, what is cos(theta)?", 1, "cos(0 degrees) = 1"],
  [39, "Trigonometry & Signals", 2, "A sine wave has peak amplitude 5V. Peak-to-peak voltage is?", 10, "Peak-to-peak is twice the amplitude"],
  [40, "Trigonometry & Signals", 3, "Nyquist minimum sample rate for a 4 kHz signal is how many Hz?", 8000, "Sample at least 2 x the highest frequency"],
  [41, "Number Systems", 1, "What is 0x10 in decimal?", 16, "Hex 10 means one sixteen and zero ones"],
  [42, "Number Systems", 1, "What is 0b10000000 in decimal?", 128, "The top bit in 8-bit binary is 2^7"],
  [43, "Number Systems", 2, "What is 64 in hexadecimal? Enter decimal value of 0x40.", 64, "0x40 is 4 x 16 = 64"],
  [44, "Number Systems", 2, "How many distinct values can 8 bits represent?", 256, "2^8 = 256"],
  [45, "Number Systems", 3, "Signed int8 range minimum is?", -128, "Two's complement int8 runs from -128 to 127"],
  [46, "Bit Manipulation", 1, "0b0101 | 0b0010 = ? in decimal", 7, "0101 OR 0010 = 0111"],
  [47, "Bit Manipulation", 1, "0b1111 & 0b0101 = ? in decimal", 5, "Only matching 1 bits remain"],
  [48, "Bit Manipulation", 2, "1 << 7 = ? in decimal", 128, "Bit 7 is 2^7"],
  [49, "Bit Manipulation", 2, "0b1000 >> 3 = ? in decimal", 1, "Shift 1000 right three places"],
  [50, "Bit Manipulation", 3, "If reg=0, after reg |= (1 << 5), reg equals?", 32, "Bit 5 is 32"],
  [51, "Algebra", 1, "If y = 2x + 1 and x = 4, y = ?", 9, "2 x 4 + 1"],
  [52, "Algebra", 1, "Convert 2 MHz to Hz.", 2000000, "Mega means one million"],
  [53, "Algebra", 2, "If Vout = Vin x 0.25 and Vin=12V, Vout = ?", 3, "12 x 0.25 = 3"],
  [54, "Algebra", 2, "If period is 500 microseconds, frequency in Hz = ?", 2000, "1 / 0.0005 = 2000"],
  [55, "Algebra", 3, "A 12-bit ADC has how many codes?", 4096, "2^12 = 4096"],
  [56, "Boolean Logic", 1, "NOT TRUE = ? Use 1=true, 0=false.", 0, "NOT flips true to false"],
  [57, "Boolean Logic", 1, "FALSE OR FALSE = ?", 0, "Neither input is true"],
  [58, "Boolean Logic", 2, "TRUE XOR TRUE = ?", 0, "XOR is true only when inputs differ"],
  [59, "Boolean Logic", 2, "NOT(0 OR 1) = ?", 0, "0 OR 1 is 1, NOT 1 is 0"],
  [60, "Boolean Logic", 3, "How many rows are in a truth table with 3 binary inputs?", 8, "2^3 combinations"],
  [61, "Fixed-Point", 1, "Store 12.34 as integer scaled by 100. Answer = ?", 1234, "12.34 x 100"],
  [62, "Fixed-Point", 1, "Q8.8 uses how many fractional bits?", 8, "The number after the dot is fractional bits"],
  [63, "Fixed-Point", 2, "In Q8.8, value 1.0 is stored as?", 256, "1 x 2^8"],
  [64, "Fixed-Point", 2, "Signed int16 maximum value is?", 32767, "2^15 - 1"],
  [65, "Fixed-Point", 3, "int8 signed maximum value is?", 127, "Two's complement int8 max is 127"],
  [66, "Fixed-Point", 3, "If scale is 1000, stored value 2500 represents?", 2, "2500 / 1000 = 2.5, numeric answers are integers here"],
  [67, "Modular Arithmetic", 1, "9 % 4 = ?", 1, "9 = 2 x 4 + 1"],
  [68, "Modular Arithmetic", 1, "(3 + 1) % 4 = ?", 0, "4 wraps to 0"],
  [69, "Modular Arithmetic", 2, "If buffer size is 16 and index is 15, next index is?", 0, "(15 + 1) % 16"],
  [70, "Modular Arithmetic", 2, "1000 % 256 = ?", 232, "256 x 3 = 768, remainder 232"],
  [71, "Modular Arithmetic", 3, "uint16_t timer at 65535 plus 1 becomes?", 0, "Unsigned 16-bit wraparound"],
  [72, "Modular Arithmetic", 3, "For ring size 32, index 45 maps to?", 13, "45 % 32 = 13"],
  [73, "Calculus Concepts", 1, "If position changes from 0 to 10 in 2 seconds, average speed = ?", 5, "10 / 2"],
  [74, "Calculus Concepts", 1, "If frequency is 20 Hz, period in milliseconds = ?", 50, "1/20 = 0.05s = 50ms"],
  [75, "Calculus Concepts", 2, "If error accumulates 3 units for 4 seconds, integral area = ?", 12, "3 x 4"],
  [76, "Calculus Concepts", 2, "RC time constant with R=2k and C=1uF in microseconds = ?", 2000, "2000 x 1uF = 0.002s"],
  [77, "Calculus Concepts", 2, "If value rises from 4 to 10 in 3 seconds, rate of change = ?", 2, "(10 - 4) / 3"],
  [78, "Calculus Concepts", 3, "PID derivative term with Kd=5 and de/dt=4 equals?", 20, "5 x 4"],
  [79, "Calculus Concepts", 3, "A first-order RC reaches about what percent after one time constant?", 63, "One tau is about 63%"],
  [80, "Calculus Concepts", 3, "If sampling interval dt is 10 ms, samples per second = ?", 100, "1 / 0.01"],
  [81, "Statistics & Probability", 1, "Mean of [2, 4, 6] = ?", 4, "Sum 12 divided by 3"],
  [82, "Statistics & Probability", 1, "Median of [1, 9, 3] = ?", 3, "Sorted values are 1, 3, 9"],
  [83, "Statistics & Probability", 1, "Probability of heads on a fair coin in percent = ?", 50, "One favorable side out of two"],
  [84, "Statistics & Probability", 2, "If 80 out of 100 predictions are correct, accuracy percent = ?", 80, "80 / 100"],
  [85, "Statistics & Probability", 2, "Range of sensor readings [10, 14, 20] = ?", 10, "20 - 10"],
  [86, "Statistics & Probability", 2, "If mean=10, std=2, z-score for x=14 = ?", 2, "(14 - 10) / 2"],
  [87, "Statistics & Probability", 2, "A dataset has 30 positive and 70 negative samples. Positive percent = ?", 30, "30 / 100"],
  [88, "Statistics & Probability", 3, "If variance is 9, standard deviation = ?", 3, "Square root of 9"],
  [89, "Statistics & Probability", 3, "If false alarms are 5 in 100 events, false alarm percent = ?", 5, "5 / 100"],
  [90, "Statistics & Probability", 3, "A 95 percent confidence idea roughly leaves how many percent outside?", 5, "100 - 95"],
  [91, "Linear Algebra", 1, "Dot product [1,2] dot [3,4] = ?", 11, "1x3 + 2x4"],
  [92, "Linear Algebra", 1, "Vector [2,3,4] has how many elements?", 3, "Count the entries"],
  [93, "Linear Algebra", 1, "A 3-axis accelerometer sample is a vector of length?", 3, "x, y, z axes"],
  [94, "Linear Algebra", 2, "A dense layer with 4 inputs and 3 outputs has how many weights?", 12, "4 x 3"],
  [95, "Linear Algebra", 2, "Add vectors [1,2] + [3,4]. First element = ?", 4, "1 + 3"],
  [96, "Linear Algebra", 2, "Matrix shape 2x3 contains how many numbers?", 6, "2 x 3"],
  [97, "Linear Algebra", 3, "A dense layer with 8 inputs and 4 outputs has weights plus biases = ?", 36, "8 x 4 weights + 4 biases"],
  [98, "Linear Algebra", 3, "Dot product [1,0,1] dot [5,9,2] = ?", 7, "1x5 + 0x9 + 1x2"],
  [99, "Linear Algebra", 3, "If input shape is 10 and output shape is 2, dense weight count = ?", 20, "10 x 2"],
  [100, "Linear Algebra", 3, "A 4x4 transform matrix has how many elements?", 16, "4 x 4"],
  [101, "DSP & Feature Extraction", 1, "Nyquist rate for a 1 kHz signal is how many Hz?", 2000, "At least 2 x highest frequency"],
  [102, "DSP & Feature Extraction", 1, "Moving average of [3, 6, 9] = ?", 6, "18 / 3"],
  [103, "DSP & Feature Extraction", 1, "A 16 kHz sampling rate captures frequencies up to how many kHz?", 8, "Nyquist frequency is half the sample rate"],
  [104, "DSP & Feature Extraction", 2, "A 1-second window at 100 Hz contains how many samples?", 100, "100 samples per second"],
  [105, "DSP & Feature Extraction", 2, "A 250 ms window at 1000 Hz contains how many samples?", 250, "0.25 x 1000"],
  [106, "DSP & Feature Extraction", 2, "Downsample 8000 Hz by factor 4 gives how many Hz?", 2000, "8000 / 4"],
  [107, "DSP & Feature Extraction", 3, "FFT bin spacing for 1000 Hz sample rate and 100 samples = ?", 10, "fs / N = 1000 / 100"],
  [108, "DSP & Feature Extraction", 3, "A 50% overlap on 200-sample windows advances by how many samples?", 100, "Half of 200"],
  [109, "DSP & Feature Extraction", 3, "A 10-bit ADC has how many possible codes?", 1024, "2^10"],
  [110, "DSP & Feature Extraction", 3, "RMS of constant value 5 is?", 5, "RMS of a constant equals the constant magnitude"],
  [111, "Control Systems Math", 1, "If target=100 and measured=80, error = ?", 20, "target - measured"],
  [112, "Control Systems Math", 1, "P controller with Kp=3 and error=4 outputs?", 12, "3 x 4"],
  [113, "Control Systems Math", 1, "If measured is above target by 5, target - measured = ?", -5, "Error is negative"],
  [114, "Control Systems Math", 2, "Integral accumulates error 2 over 5 steps. Sum = ?", 10, "2 x 5"],
  [115, "Control Systems Math", 2, "Derivative from error 10 to 4 over 3 seconds = ?", -2, "(4 - 10) / 3"],
  [116, "Control Systems Math", 2, "A 100 Hz control loop has period in ms = ?", 10, "1/100 = 0.01s"],
  [117, "Control Systems Math", 3, "PID with Kp=2, error=5, Ki=0, Kd=0 outputs?", 10, "Only P term is active"],
  [118, "Control Systems Math", 3, "If output saturates at 255 and command is 300, actual output = ?", 255, "Saturation clips to max"],
  [119, "Control Systems Math", 3, "A loop running every 5 ms runs how many times per second?", 200, "1 / 0.005"],
  [120, "Control Systems Math", 3, "If error changes from 2 to 8 in 2 seconds, derivative = ?", 3, "(8 - 2) / 2"],
  [121, "ML Basics & Loss Functions", 1, "If prediction=7 and actual=5, error = ?", 2, "prediction - actual"],
  [122, "ML Basics & Loss Functions", 1, "MSE for one error of 3 is?", 9, "3 squared"],
  [123, "ML Basics & Loss Functions", 1, "If 90 out of 100 examples are classified correctly, accuracy percent = ?", 90, "90 / 100"],
  [124, "ML Basics & Loss Functions", 2, "Mean absolute error for errors [2, 4] = ?", 3, "(2 + 4) / 2"],
  [125, "ML Basics & Loss Functions", 2, "If learning rate is 2 and gradient is 5, update size = ?", 10, "2 x 5"],
  [126, "ML Basics & Loss Functions", 2, "Binary labels usually use how many classes?", 2, "Two classes"],
  [127, "ML Basics & Loss Functions", 3, "A dataset with 1000 samples and batch size 100 has batches per epoch = ?", 10, "1000 / 100"],
  [128, "ML Basics & Loss Functions", 3, "If loss drops from 12 to 3, decrease amount = ?", 9, "12 - 3"],
  [129, "ML Basics & Loss Functions", 3, "For 5 classes, random guess accuracy percent is about?", 20, "1 / 5 = 20%"],
  [130, "ML Basics & Loss Functions", 3, "Train 80 percent of 500 samples gives how many training samples?", 400, "0.8 x 500"],
  [131, "Neural Network Math", 1, "ReLU(-5) = ?", 0, "ReLU clips negatives to zero"],
  [132, "Neural Network Math", 1, "ReLU(7) = ?", 7, "Positive values pass through"],
  [133, "Neural Network Math", 1, "A neuron with 3 inputs has how many weights?", 3, "One weight per input"],
  [134, "Neural Network Math", 2, "Dense layer 6 inputs, 2 outputs: weight count = ?", 12, "6 x 2"],
  [135, "Neural Network Math", 2, "Dense layer 6 inputs, 2 outputs: weights plus biases = ?", 14, "12 weights + 2 biases"],
  [136, "Neural Network Math", 2, "Softmax outputs for 4 classes sum to what value?", 1, "Probabilities sum to 1"],
  [137, "Neural Network Math", 3, "A 3x3 convolution kernel has how many weights per input channel?", 9, "3 x 3"],
  [138, "Neural Network Math", 3, "A 1D conv kernel size 5 with 8 filters has how many weights for one input channel?", 40, "5 x 8"],
  [139, "Neural Network Math", 3, "If model has 10000 int8 weights, weight storage is about how many KB?", 10, "int8 is 1 byte, about 10 KB"],
  [140, "Neural Network Math", 3, "Sigmoid output is between 0 and what value?", 1, "Sigmoid ranges 0 to 1"],
  [141, "Quantization & Numeric Precision", 1, "Signed int8 maximum value is?", 127, "int8 signed range is -128 to 127"],
  [142, "Quantization & Numeric Precision", 1, "Unsigned uint8 maximum value is?", 255, "uint8 range is 0 to 255"],
  [143, "Quantization & Numeric Precision", 1, "uint8 has how many distinct values?", 256, "0 through 255"],
  [144, "Quantization & Numeric Precision", 2, "If scale=0.5, zero_point=0, q=10, real value = ?", 5, "0.5 x 10"],
  [145, "Quantization & Numeric Precision", 2, "If real=6, scale=2, zero_point=0, q = ?", 3, "real / scale"],
  [146, "Quantization & Numeric Precision", 2, "Clip value 300 into uint8 max gives?", 255, "uint8 cannot exceed 255"],
  [147, "Quantization & Numeric Precision", 3, "int8 multiply accumulations usually use int how many bits?", 32, "int32 accumulators avoid overflow"],
  [148, "Quantization & Numeric Precision", 3, "Quantizing 1000 float32 weights to int8 reduces bytes per weight from 4 to?", 1, "int8 uses 1 byte"],
  [149, "Quantization & Numeric Precision", 3, "A 4x memory reduction from 40 KB gives how many KB?", 10, "40 / 4"],
  [150, "Quantization & Numeric Precision", 3, "If zero_point=128 and q=128, real value is?", 0, "q - zero_point = 0"],
  [151, "Model Evaluation & Deployment Math", 1, "Precision formula numerator is TP. If TP=8 and FP=2, precision percent = ?", 80, "8 / (8 + 2)"],
  [152, "Model Evaluation & Deployment Math", 1, "Recall with TP=9 and FN=1 in percent = ?", 90, "9 / (9 + 1)"],
  [153, "Model Evaluation & Deployment Math", 1, "If inference takes 20 ms, max inferences per second = ?", 50, "1000 / 20"],
  [154, "Model Evaluation & Deployment Math", 2, "If model is 80 KB and flash budget is 128 KB, remaining KB = ?", 48, "128 - 80"],
  [155, "Model Evaluation & Deployment Math", 2, "If tensor arena is 24 KB and RAM is 64 KB, remaining KB = ?", 40, "64 - 24"],
  [156, "Model Evaluation & Deployment Math", 2, "False positives=3, true negatives=97. False positive rate percent = ?", 3, "3 / (3 + 97)"],
  [157, "Model Evaluation & Deployment Math", 3, "F1 for precision=100% and recall=50% is about what percent?", 67, "2PR/(P+R)=2x1x0.5/1.5 = 0.667"],
  [158, "Model Evaluation & Deployment Math", 3, "If duty cycle is 10%, active current is 20mA, sleep current ignored, average mA = ?", 2, "0.1 x 20"],
  [159, "Model Evaluation & Deployment Math", 3, "A model with 95 correct out of 100 has error percent = ?", 5, "100 - 95"],
  [160, "Model Evaluation & Deployment Math", 3, "If latency budget is 50 ms and model takes 35 ms, margin ms = ?", 15, "50 - 35"],
].map(([id, topic, level, q, a, hint]) => ({ id, topic, level: level === 3 ? "Advanced" : level === 2 ? "Intermediate" : "Easy", q, a, hint, source: "Original embedded/TinyML practice" }));

function buildExpandedQuizBank(baseQuestions) {
  const generated = [];
  let id = 10000;
  for (const topic of Object.values(GUIDE_TO_QUIZ_TOPIC)) {
    for (const level of ["Easy", "Intermediate", "Advanced"]) {
      for (let i = 1; i <= 50; i += 1) {
        generated.push(makeGeneratedQuestion(id, topic, level, i));
        id += 1;
      }
    }
  }
  return [...baseQuestions, ...generated];
}

function makeGeneratedQuestion(id, topic, level, n) {
  const easy = level === "Easy";
  const advanced = level === "Advanced";
  const a = (n % 9) + 2;
  const b = ((n * 3) % 11) + 1;
  const c = ((n * 5) % 13) + 2;
  const source = easy ? "Easy course-aligned original" : advanced ? "Advanced course-aligned original" : "Intermediate course-aligned original";
  const item = (q, answer, hint) => ({ id, topic, level, q, a: answer, hint, source });

  if (easy) {
    switch (topic) {
      case "Number Systems":
        if (n % 4 === 0) return item(`What is ${a} + ${b} in decimal?`, a + b, "Add the numbers.");
        if (n % 4 === 1) return item(`What is ${a} x ${b}?`, a * b, "Multiply the numbers.");
        if (n % 4 === 2) return item(`How many bits in ${a} bytes?`, a * 8, "1 byte = 8 bits.");
        return item(`What is ${b}0 in decimal?`, b * 10, "Tens place value.");
      case "Bit Manipulation":
        if (n % 4 === 0) return item(`${a} AND ${b}: bitwise if both are 1, result = (1 if ${a}>0 && ${b}>0 else 0)?`, (a > 0 && b > 0) ? 1 : 0, "AND requires both true.");
        if (n % 4 === 1) return item(`${a} OR ${b}: bitwise if either is 1, result = (1 if ${a}>0 || ${b}>0 else 0)?`, (a > 0 || b > 0) ? 1 : 0, "OR true if either is true.");
        if (n % 4 === 2) return item(`NOT ${a % 2} (use 1=true,0=false)?`, a % 2 ? 0 : 1, "NOT flips the bit.");
        return item(`${a % 2} XOR ${(a + 1) % 2} (use 1=true,0=false)?`, 1, "XOR is true when bits differ.");
      case "Algebra":
        if (n % 4 === 0) return item(`If x + ${a} = ${a + b}, x = ?`, b, `Subtract ${a} from both sides.`);
        if (n % 4 === 1) return item(`If ${a} * x = ${a * b}, x = ?`, b, `Divide both sides by ${a}.`);
        if (n % 4 === 2) return item(`1 MHz = ? Hz`, 1000000, "MHz means million hertz.");
        return item(`If x - ${a} = ${b}, x = ?`, a + b, `Add ${a} to both sides.`);
      case "Boolean Logic":
        if (n % 4 === 0) return item(`TRUE AND TRUE = ? (1=true,0=false)`, 1, "Both true = AND is true.");
        if (n % 4 === 1) return item(`FALSE OR TRUE = ? (1=true,0=false)`, 1, "One true = OR is true.");
        if (n % 4 === 2) return item(`TRUE AND FALSE = ? (1=true,0=false)`, 0, "Both must be true for AND.");
        return item(`TRUE OR FALSE = ? (1=true,0=false)`, 1, "One true is enough for OR.");
      case "Fixed-Point":
        if (n % 4 === 0) return item(`Store ${a}.${b} as integer scaled by 10. Answer = ?`, a * 10 + b, "Move decimal one place right.");
        if (n % 4 === 1) return item(`5 / 2 = ? (integer division)`, 2, "Integer division discards remainder.");
        if (n % 4 === 2) return item(`${a} x 10 = ?`, a * 10, "Multiply by 10.");
        return item(`Scale ${a * 10} back by dividing by 10. Answer = ?`, a, "Divide by 10.");
      case "Modular Arithmetic":
        if (n % 4 === 0) return item(`${a * 2} % ${a} = ?`, 0, "Even multiple yields remainder 0.");
        if (n % 4 === 1) return item(`${a * 5 + b} % ${a} = ?`, b, "Remove the multiples of a.");
        if (n % 4 === 2) return item(`5 + 1 % 3 = ? (add left to right)`, 0, "6 mod 3 = 0.");
        return item(`${a + b} % ${a} = ?`, b, `${a + b} = ${a} x 1 + ${b}.`);
      case "Calculus Concepts":
        if (n % 4 === 0) return item(`Value ${a} to ${a + b} change = ?`, b, "Subtract starting from ending.");
        if (n % 4 === 1) return item(`A ${a * 10} Hz wave period in ms = ?`, Math.round(1000 / (a * 10)), "Period = 1000/f ms.");
        if (n % 4 === 2) return item(`Area of ${a} x ${b} rectangle = ?`, a * b, "Area = width x height.");
        return item(`Rate: ${a * 5} units / ${a} seconds = ?`, 5, "Divide units by time.");
      case "Trigonometry & Signals":
        if (n % 4 === 0) return item(`A full circle has how many degrees?`, 360, "360 degrees in a circle.");
        if (n % 4 === 1) return item(`A right angle is how many degrees?`, 90, "Right angle = 90 degrees.");
        if (n % 4 === 2) return item(`${a * 5} Hz period in ms = ?`, Math.round(1000 / (a * 5)), "T = 1000/f.");
        return item(`Amplitude ${a}V peak gives peak-to-peak = ?`, a * 2, "Peak-to-peak = 2 x amplitude.");
      case "Statistics & Probability":
        if (n % 4 === 0) return item(`Mean of [${a}, ${a + b}, ${a + 2 * b}] = ?`, a + b, "Middle of evenly spaced values.");
        if (n % 4 === 1) return item(`${a * 10} out of 100 as percent?`, a * 10, "Percent = part/whole x 100.");
        if (n % 4 === 2) return item(`Probability of heads on fair coin (percent)?`, 50, "1 out of 2 sides.");
        return item(`Range of [${a}, ${a + b}] = ?`, b, "Max minus min.");
      case "Linear Algebra":
        if (n % 4 === 0) return item(`A vector has ${a + 2} elements. Its length is?`, a + 2, "Count the elements.");
        if (n % 4 === 1) return item(`A 3-axis sensor gives a vector of length?`, 3, "x, y, z.");
        if (n % 4 === 2) return item(`Add [${a}, ${b}] + [${c}, ${a}] first element = ?`, a + c, "Add first elements.");
        return item(`${a} x ${b} matrix has how many elements?`, a * b, "Rows x columns.");
      case "DSP & Feature Extraction":
        if (n % 4 === 0) return item(`Mean of [${a}, ${b}, ${c}] rounded down = ?`, Math.floor((a + b + c) / 3), "Sum divided by count.");
        if (n % 4 === 1) return item(`100 ms at ${a * 10} Hz has how many samples?`, Math.round(0.1 * a * 10), "Samples = seconds x Hz.");
        if (n % 4 === 2) return item(`Nyquist says sample ${a} kHz signal at least ? Hz`, a * 2000, "At least 2x frequency.");
        return item(`A ${a * 100} Hz sample rate captures up to ? Hz`, a * 50, "Nyquist = half sample rate.");
      case "Control Systems Math":
        if (n % 4 === 0) return item(`Target=${a * 10}, measured=${b * 5}. Error = ?`, a * 10 - b * 5, "target - measured.");
        if (n % 4 === 1) return item(`Kp=${a}, error=${b}. P output = ?`, a * b, "Kp x error.");
        if (n % 4 === 2) return item(`If measured > target by ${a}, error sign? (-1 or 1)`, -1, "Error = target - measured.");
        return item(`${a * 10} Hz control loop period in ms = ?`, Math.round(1000 / (a * 10)), "Period = 1000/f.");
      case "ML Basics & Loss Functions":
        if (n % 4 === 0) return item(`Prediction=${a + b}, actual=${a}. Error = ?`, b, "prediction - actual.");
        if (n % 4 === 1) return item(`Error of ${a} squared = ?`, a * a, "Square the error.");
        if (n % 4 === 2) return item(`${a * 10} correct out of 100. Accuracy percent = ?`, a * 10, "correct / total x 100.");
        return item(`Binary classification has how many classes?`, 2, "Two classes.");
      case "Neural Network Math":
        if (n % 4 === 0) return item(`ReLU(${a}) = ?`, a, "Positive passes through.");
        if (n % 4 === 1) return item(`ReLU(${-a}) = ?`, 0, "Negative clips to zero.");
        if (n % 4 === 2) return item(`A neuron with ${a} inputs has how many weights?`, a, "One weight per input.");
        return item(`Sigmoid outputs between 0 and ?`, 1, "Sigmoid range is 0 to 1.");
      case "Quantization & Numeric Precision":
        if (n % 4 === 0) return item(`uint8 max = ?`, 255, "0 to 255 range.");
        if (n % 4 === 1) return item(`int8 max = ?`, 127, "-128 to 127 range.");
        if (n % 4 === 2) return item(`uint8 min = ?`, 0, "Unsigned minimum is 0.");
        return item(`int8 min = ?`, -128, "-128 is the minimum.");
      case "Model Evaluation & Deployment Math":
        if (n % 4 === 0) return item(`TP=${a}, FP=${b}. Total positive predictions = ?`, a + b, "TP + FP.");
        if (n % 4 === 1) return item(`TP=${a}, FN=${b}. Total actual positives = ?`, a + b, "TP + FN.");
        if (n % 4 === 2) return item(`Inference ${a * 10} ms. Max per second = ?`, Math.round(1000 / (a * 10)), "1000 / latency.");
        return item(`Model ${b * 10} KB, flash ${a * 32} KB. Remaining = ?`, a * 32 - b * 10, "Budget minus model.");
      default:
        return item(`${a} + ${b} = ?`, a + b, "Add the values.");
    }
  }

  switch (topic) {
    case "Number Systems": {
      const value = advanced ? 128 + ((n * 17) % 120) : 16 + ((n * 7) % 80);
      if (n % 4 === 0) return item(`Convert decimal ${value} to hex, then enter the decimal value of that hex.`, value, "Conversion should preserve the same value.");
      if (n % 4 === 1) return item(`How many values can ${a + 4} bits represent?`, 2 ** (a + 4), "n bits represent 2^n values.");
      if (n % 4 === 2) return item(`What is the maximum unsigned value for ${a + 4} bits?`, 2 ** (a + 4) - 1, "Unsigned max is 2^n - 1.");
      return item(`Two's complement signed ${a + 4}-bit minimum value is?`, -(2 ** (a + 3)), "Signed minimum is -2^(n-1).");
    }
    case "Bit Manipulation": {
      const bit = n % (advanced ? 8 : 6);
      if (n % 4 === 0) return item(`1 << ${bit} equals?`, 2 ** bit, "Left shift places a 1 at that bit position.");
      if (n % 4 === 1) return item(`Set bit ${bit} in zero. Result decimal = ?`, 2 ** bit, "Setting one bit produces 2^bit.");
      if (n % 4 === 2) return item(`Clear bit ${bit} from 255. Result decimal = ?`, 255 - 2 ** bit, "255 has all low 8 bits set.");
      return item(`Toggle bit ${bit} in ${2 ** bit}. Result decimal = ?`, 0, "Toggling a set bit clears it.");
    }
    case "Boolean Logic": {
      if (n % 4 === 0) return item(`How many truth-table rows are needed for ${a} binary inputs?`, 2 ** a, "Rows = 2^inputs.");
      if (n % 4 === 1) return item(`NAND(1, ${n % 2}) equals?`, n % 2 ? 0 : 1, "NAND is NOT(AND).");
      if (n % 4 === 2) return item(`XOR(${n % 2}, ${(n + 1) % 2}) equals?`, 1, "XOR is true when inputs differ.");
      return item(`NOT(${n % 2}) equals?`, n % 2 ? 0 : 1, "NOT flips a Boolean value.");
    }
    case "Algebra": {
      if (n % 4 === 0) return item(`Timer frequency: f_clk=${a * 2}000000 Hz, prescaler=${b}, period=${c * 10}. Frequency rounded down = ?`, Math.floor((a * 2000000) / (b * c * 10)), "f = f_clk / (prescaler x period).");
      if (n % 4 === 1) return item(`PWM compare=${a * 10}, period=${a * 20}. Duty percent = ?`, 50, "compare / period x 100.");
      if (n % 4 === 2) return item(`Voltage divider with equal resistors and Vin=${a * 2}V gives Vout = ?`, a, "Equal resistors halve the voltage.");
      return item(`Convert ${a} MHz to Hz.`, a * 1000000, "MHz means million hertz.");
    }
    case "Fixed-Point": {
      const singleB = ((n * 3) % 9) + 1;
      if (n % 4 === 0) return item(`Q8.8 representation of ${a}.0 equals?`, a * 256, "Q8.8 scale is 2^8.");
      if (n % 4 === 1) return item(`Store ${a}.${singleB} using scale 100. Rounded integer = ?`, a * 100 + singleB * 10, "Move two decimal places.");
      if (n % 4 === 2) return item(`Signed ${a + 8}-bit max value is?`, 2 ** (a + 7) - 1, "Signed max is 2^(bits-1)-1.");
      return item(`Unsigned ${a + 8}-bit value wraps after how many distinct values?`, 2 ** (a + 8), "Unsigned range size is 2^bits.");
    }
    case "Modular Arithmetic": {
      const size = advanced ? 32 : 16;
      if (n % 4 === 0) return item(`${a * size + b} % ${size} = ?`, b, "Modulo keeps the remainder.");
      if (n % 4 === 1) return item(`Ring buffer size ${size}, head ${size - 1}; next head = ?`, 0, "The next index wraps to zero.");
      if (n % 4 === 2) return item(`uint8 value ${250 + (n % 6)} plus ${10 + (n % 8)} wraps to?`, (250 + (n % 6) + 10 + (n % 8)) % 256, "uint8 arithmetic is modulo 256.");
      return item(`Clock arithmetic: (${a} + ${b}) % ${c + 8} = ?`, (a + b) % (c + 8), "Add first, then take the remainder.");
    }
    case "Calculus Concepts": {
      if (n % 4 === 0) return item(`Value changes from ${a} to ${a + b * 2} in ${b} seconds. Rate = ?`, 2, "Rate = change / time.");
      if (n % 4 === 1) return item(`A ${a * 10} Hz signal has period in milliseconds rounded down = ?`, Math.floor(1000 / (a * 10)), "T = 1/f.");
      if (n % 4 === 2) return item(`Integral area of constant error ${a} over ${b} seconds = ?`, a * b, "Area = height x width.");
      return item(`PID P-term with Kp=${a} and error=${b} equals?`, a * b, "P = Kp x error.");
    }
    case "Trigonometry & Signals": {
      if (n % 4 === 0) return item(`A ${a * 100} Hz signal has period in milliseconds rounded down = ?`, Math.floor(1000 / (a * 100)), "Period = 1/f.");
      if (n % 4 === 1) return item(`Peak amplitude ${a}V gives peak-to-peak voltage = ?`, a * 2, "Peak-to-peak is twice amplitude.");
      if (n % 4 === 2) return item(`Three-phase signals are separated by how many degrees?`, 120, "360 / 3.");
      return item(`Nyquist minimum sample rate for ${a} kHz signal in Hz = ?`, a * 2000, "Minimum sample rate is 2x frequency.");
    }
    case "Statistics & Probability": {
      if (n % 4 === 0) return item(`Mean of [${a}, ${a + b}, ${a + b * 2}] = ?`, a + b, "Middle of evenly spaced values.");
      if (n % 4 === 1) return item(`Accuracy: ${a * 10} correct out of 100 = ? percent`, a * 10, "correct / total x 100.");
      if (n % 4 === 2) return item(`If variance is ${a * a}, standard deviation = ?`, a, "Standard deviation is sqrt(variance).");
      return item(`If mean=${a * 10}, std=${b}, x=${a * 10 + b * c}, z-score = ?`, c, "z = (x - mean) / std.");
    }
    case "Linear Algebra": {
      if (n % 4 === 0) return item(`Dot product [${a}, ${b}] dot [${c}, ${a}] = ?`, a * c + b * a, "Multiply matching entries and add.");
      if (n % 4 === 1) return item(`A ${a}x${b} matrix contains how many elements?`, a * b, "rows x columns.");
      if (n % 4 === 2) return item(`Dense layer with ${a} inputs and ${b} outputs has how many weights?`, a * b, "inputs x outputs.");
      return item(`Dense layer with ${a} inputs and ${b} outputs has weights plus biases = ?`, a * b + b, "Add one bias per output.");
    }
    case "DSP & Feature Extraction": {
      if (n % 4 === 0) return item(`A ${a * 1000} Hz sample rate has Nyquist frequency in Hz = ?`, a * 500, "Nyquist is half the sample rate.");
      if (n % 4 === 1) return item(`${a * 100} ms window at ${b * 100} Hz has how many samples?`, a * b * 10, "seconds x samples per second.");
      if (n % 4 === 2) return item(`Moving average of [${a}, ${a + b}, ${a + b * 2}] = ?`, a + b, "Average evenly spaced values.");
      return item(`FFT bin spacing: fs=${a * 1000} Hz, N=${a * 100}. Spacing Hz = ?`, 10, "fs / N.");
    }
    case "Control Systems Math": {
      if (n % 4 === 0) return item(`Target=${a * 10}, measured=${b * 5}. Error = ?`, a * 10 - b * 5, "target - measured.");
      if (n % 4 === 1) return item(`P controller Kp=${a}, error=${b}. Output = ?`, a * b, "Kp x error.");
      if (n % 4 === 2) return item(`Control loop period ${a} ms means frequency rounded down in Hz = ?`, Math.floor(1000 / a), "Frequency = 1000 / ms.");
      return item(`Command ${255 + a} clipped to uint8 max gives?`, 255, "Saturation limits output.");
    }
    case "ML Basics & Loss Functions": {
      if (n % 4 === 0) return item(`Prediction=${a + b}, actual=${a}. Error = ?`, b, "prediction - actual.");
      if (n % 4 === 1) return item(`MSE for one error ${a} equals?`, a * a, "Square the error.");
      if (n % 4 === 2) return item(`${a * 10} correct out of 100 gives accuracy percent = ?`, a * 10, "correct / total x 100.");
      return item(`Dataset ${a * 100} samples, batch size ${a * 10}. Batches per epoch = ?`, 10, "samples / batch size.");
    }
    case "Neural Network Math": {
      if (n % 4 === 0) return item(`ReLU(${-a}) = ?`, 0, "ReLU clips negative values to zero.");
      if (n % 4 === 1) return item(`ReLU(${a}) = ?`, a, "Positive values pass through.");
      if (n % 4 === 2) return item(`3x3 convolution has how many weights per input channel?`, 9, "3 x 3.");
      return item(`Dense layer ${a} inputs, ${b} outputs, weights plus biases = ?`, a * b + b, "inputs x outputs + outputs.");
    }
    case "Quantization & Numeric Precision": {
      if (n % 4 === 0) return item(`uint8 maximum value is?`, 255, "uint8 range is 0 to 255.");
      if (n % 4 === 1) return item(`int8 maximum value is?`, 127, "signed int8 range is -128 to 127.");
      if (n % 4 === 2) return item(`scale=${a}, zero_point=0, q=${b}. Real value = ?`, a * b, "real = scale x q.");
      return item(`Float32 uses 4 bytes; int8 uses how many byte?`, 1, "int8 is one byte.");
    }
    case "Model Evaluation & Deployment Math": {
      if (n % 4 === 0) return item(`Precision with TP=${a}, FP=${b}: percent rounded down = ?`, Math.floor((a / (a + b)) * 100), "TP / (TP + FP).");
      if (n % 4 === 1) return item(`Recall with TP=${a}, FN=${b}: percent rounded down = ?`, Math.floor((a / (a + b)) * 100), "TP / (TP + FN).");
      if (n % 4 === 2) return item(`Inference ${a * 5} ms means max inferences/sec rounded down = ?`, Math.floor(1000 / (a * 5)), "1000 / latency_ms.");
      return item(`Flash budget ${a * 32} KB, model ${b * 8} KB. Remaining KB = ?`, a * 32 - b * 8, "budget - model size.");
    }
    default:
      return item(`${a} + ${b} = ?`, a + b, "Add the values.");
  }
}

const QUIZ_BANK = buildExpandedQuizBank(BASE_QUIZ_BANK);

const RESOURCES = [
  {
    topic: "Number Systems",
    videos: [
      { title: "The Binary Number System", youtubeId: "sXxwr66Y79Y", channel: "Khan Academy Computing" },
      { title: "Hexadecimal Number System", youtubeId: "hex", url: "https://www.khanacademy.org/math/pre-algebra/applying-math-reasoning-topic/alternate-number-bases/v/hexadecimal-number-system" },
    ],
    exerciseUrl: "https://www.khanacademy.org/math/pre-algebra/applying-math-reasoning-topic/alternate-number-bases/e/binary-to-decimal",
    topicUrl: "https://www.khanacademy.org/math/pre-algebra/applying-math-reasoning-topic/alternate-number-bases",
  },
  {
    topic: "Bit Manipulation",
    videos: [
      { title: "How Computers Store Data", youtubeId: "1GSjbWt0c9M", channel: "Crash Course Computer Science" },
    ],
    exerciseUrl: "https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:digital-information/xcae6f4a7ff015e7d:storing-numbers/e/bits-and-bytes",
    topicUrl: "https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:digital-information",
  },
  {
    topic: "Boolean Logic",
    videos: [
      { title: "Boolean Logic & Logic Gates", youtubeId: "gI-qXk7XojA", channel: "Crash Course Computer Science" },
      { title: "Evaluating Compound Boolean Expressions", youtubeId: "p7pJMvD2sag", channel: "Khan Academy" },
    ],
    exerciseUrl: "https://www.khanacademy.org/computing/intro-to-python-fundamentals/x5279a44ae0ab15d6:designing-algorithms-with-conditionals/e/compound-boolean-expressions",
    topicUrl: "https://www.khanacademy.org/computing/intro-to-python-fundamentals/x5279a44ae0ab15d6:designing-algorithms-with-conditionals",
  },
  {
    topic: "Algebra",
    videos: [
      { title: "Algebra Basics: What Is Algebra?", youtubeId: "NybHckSEQBI", channel: "Math Antics" },
    ],
    exerciseUrl: "https://www.khanacademy.org/math/algebra-home/alg-basics/alg-basics-algebraic-expressions/e/algebraic-expressions",
    topicUrl: "https://www.khanacademy.org/math/algebra-home",
  },
  {
    topic: "Calculus Concepts",
    videos: [
      { title: "The Essence of Calculus (Ch1)", youtubeId: "WUvTyaaNkzM", channel: "3Blue1Brown" },
      { title: "The Paradox of the Derivative (Ch2)", youtubeId: "9vKqVkMQHKk", channel: "3Blue1Brown" },
      { title: "Derivative as a Concept", youtubeId: "N2PpRnFqnqY", channel: "Khan Academy" },
      { title: "Definite Integrals Intro", youtubeId: "0dDIPzqKgYk", channel: "Khan Academy" },
    ],
    exerciseUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new/ab-2-1/e/derivative-as-a-concept",
    topicUrl: "https://www.khanacademy.org/math/ap-calculus-ab",
  },
  {
    topic: "Fixed-Point",
    videos: [
      { title: "Floating Point Numbers (Fixed-point context)", youtubeId: "PZRI1IfStY0", channel: "Computerphile" },
      { title: "IEEE 754 Standard for Floating-Point Arithmetic", youtubeId: "_NFaYk9R9jI", channel: "Neso Academy" },
    ],
    topicUrl: "https://www.nesoacademy.org/cs/03-computer-organization-and-architecture",
    courseUrl: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q",
  },
  {
    topic: "Modular Arithmetic",
    videos: [
      { title: "What Is Modular Arithmetic?", youtubeId: "Eg6CTCu8iio", channel: "Learn Math Tutorials" },
    ],
    exerciseUrl: "https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/e/modular-addition-and-subtraction",
    topicUrl: "https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic",
  },
  {
    topic: "Trigonometry & Signals",
    videos: [
      { title: "Basic Trigonometry", youtubeId: "Jsiy4TxgIME", channel: "Khan Academy" },
      { title: "Introduction to the Unit Circle", youtubeId: "1m9p9iubMLU", channel: "Khan Academy" },
    ],
    exerciseUrl: "https://www.khanacademy.org/math/trigonometry/basic-trigonometry/basic_trig_ratios/e/trigonometry_0.5",
    topicUrl: "https://www.khanacademy.org/math/trigonometry",
  },
  {
    topic: "Statistics & Probability",
    videos: [
      { title: "Bayes Theorem (Geometry of Changing Beliefs)", youtubeId: "HZGCoVF3YvM", channel: "3Blue1Brown" },
      { title: "Statistics Intro: Mean, Median, and Mode", youtubeId: "h8EYEJ32oQ8", channel: "Khan Academy" },
      { title: "Binomial Distributions (Probabilities of Probabilities)", youtubeId: "8idr1WZ1A7Q", channel: "3Blue1Brown" },
    ],
    exerciseUrl: "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data/mean-median-basics/e/mean_median_and_mode",
    topicUrl: "https://www.khanacademy.org/math/statistics-probability",
  },
  {
    topic: "Linear Algebra",
    videos: [
      { title: "Vectors (Essence of LA Ch1)", youtubeId: "fNk_zzaMoSs", channel: "3Blue1Brown" },
      { title: "Linear Transformations & Matrices (Ch3)", youtubeId: "kYB8IZa5AuE", channel: "3Blue1Brown" },
      { title: "Matrix Multiplication as Composition (Ch4)", youtubeId: "XkY2DOUCWMU", channel: "3Blue1Brown" },
      { title: "Introduction to Matrices", youtubeId: "xyAuNHPsq-g", channel: "Khan Academy" },
    ],
    exerciseUrl: "https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:multiplying-matrices-by-matrices/e/matrix_multiplication",
    topicUrl: "https://www.khanacademy.org/math/linear-algebra",
  },
  {
    topic: "DSP & Feature Extraction",
    videos: [
      { title: "The Fourier Transform", youtubeId: "spUNpyF58BY", channel: "3Blue1Brown" },
      { title: "Digital and Analog Information", youtubeId: "oSZNQ1LZjHg", channel: "Khan Academy" },
      { title: "Nyquist Rate (Solved Problem 1)", youtubeId: "hRH9edUACcI", channel: "Neso Academy" },
      { title: "Sampling, Aliasing & Nyquist Theorem", youtubeId: "yWqrx08UeUs", channel: "0612 TV w/ NERDfirst" },
    ],
    topicUrl: "https://www.khanacademy.org/computing/computer-science/informationtheory",
  },
  {
    topic: "Control Systems Math",
    videos: [
      { title: "PID Control Introduction", youtubeId: "wkfEZmsQqiA", channel: "MATLAB" },
    ],
    topicUrl: "https://www.khanacademy.org/science/electrical-engineering",
  },
  {
    topic: "ML Basics & Loss Functions",
    videos: [
      { title: "Gradient Descent (how neural nets learn)", youtubeId: "IHZwWFHWa-w", channel: "3Blue1Brown" },
    ],
    exerciseUrl: "https://www.khanacademy.org/computing/computer-science/algorithms",
    topicUrl: "https://www.khanacademy.org/computing/computer-science/algorithms",
  },
  {
    topic: "Neural Network Math",
    videos: [
      { title: "But What Is a Neural Network? (Ch1)", youtubeId: "aircAruvnKk", channel: "3Blue1Brown" },
      { title: "Gradient Descent (Ch2)", youtubeId: "IHZwWFHWa-w", channel: "3Blue1Brown" },
      { title: "What Is Backpropagation Really Doing? (Ch3)", youtubeId: "Ilg3gGewQ5U", channel: "3Blue1Brown" },
      { title: "Backpropagation Calculus (Ch4)", youtubeId: "tIeHLnjs5U8", channel: "3Blue1Brown" },
    ],
    topicUrl: "https://www.3blue1brown.com/topics/neural-networks",
  },
  {
    topic: "Quantization & Numeric Precision",
    videos: [
      { title: "Floating Point Numbers", youtubeId: "PZRI1IfStY0", channel: "Computerphile" },
      { title: "IEEE 754 - Single and Double Precision", youtubeId: "TaDrBnRS0_Q", channel: "Neso Academy" },
    ],
    topicUrl: "https://www.tensorflow.org/lite/performance/quantization_spec",
  },
  {
    topic: "Model Evaluation & Deployment Math",
    videos: [
      { title: "Precision, Recall, & F1 Score", youtubeId: "khykvGo-Yjc", channel: "TensorTeach" },
      { title: "Precision, Recall, F1 score", youtubeId: "2osIZ-dSPGE", channel: "codebasics" },
    ],
    topicUrl: "https://www.khanacademy.org/math/ap-statistics/sampling-distribution-ap/what-is-sampling-distribution/v/introduction-to-sampling-distribution",
    courseUrl: "https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall",
  },
];

const TOPICS = ["All", ...new Set(QUIZ_BANK.map((q) => q.topic))];
const LEVELS = ["Easy", "Intermediate", "Advanced"];
const EXAM_LENGTHS = [10, 25, 50, 75];
const state = {
  tab: "study",
  guideTopic: null,
  quizTopic: "All",
  quizLevel: "Easy",
  quizLength: Number(localStorage.getItem("firmwareMathQuizLength") || 10),
  quizQueue: [],
  qIdx: 0,
  input: "",
  feedback: null,
  showHint: false,
  score: 0,
  quizDone: false,
  allResults: JSON.parse(localStorage.getItem("firmwareMathProgress") || "{}"),
  topicScores: JSON.parse(localStorage.getItem("firmwareMathTopicScores") || "{}"),
  foundationsScores: JSON.parse(localStorage.getItem("firmwareMathFoundationsScores") || "{}"),
  foundationsQuizLength: Number(localStorage.getItem("firmwareMathFoundationsLength") || 25),
  cs50Progress: JSON.parse(localStorage.getItem("firmwareMathCS50Progress") || "{}"),
  foundationsView: "overview",
  foundationsLevel: "Easy",
  foundationsCurrentLevel: 0,
  fQueue: [],
  fIdx: 0,
  fInput: "",
  fFeedback: null,
  fShowHint: false,
  fScore: 0,
  cs50Queue: [],
  cs50QIdx: 0,
  cs50Input: "",
  cs50Feedback: null,
  cs50ShowHint: false,
  cs50Score: 0,
  cs50CurrentWeek: null,
  cs50Level: "Easy",
  studySubTab: "guide",
  theme: localStorage.getItem("firmwareMathTheme") || "dark",
};

if (![25, 50, 75].includes(state.foundationsQuizLength)) state.foundationsQuizLength = 25;

for (const key of Object.keys(state.topicScores)) {
  if (!key.includes("::")) delete state.topicScores[key];
}
for (const key of Object.keys(state.cs50Progress)) {
  if (state.cs50Progress[key] === true) state.cs50Progress[key] = 100;
  if (typeof state.cs50Progress[key] !== "number") delete state.cs50Progress[key];
}
saveProgress();

const $ = (id) => document.getElementById(id);
const tagClass = (tag) => tag.toLowerCase().replace(/\s+/g, "-").replace("embedded-specific", "embedded");
const esc = (value) => String(value).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[ch]);

function saveProgress() {
  localStorage.setItem("firmwareMathProgress", JSON.stringify(state.allResults));
  localStorage.setItem("firmwareMathTopicScores", JSON.stringify(state.topicScores));
  localStorage.setItem("firmwareMathFoundationsScores", JSON.stringify(state.foundationsScores));
  localStorage.setItem("firmwareMathFoundationsLength", String(state.foundationsQuizLength));
  localStorage.setItem("firmwareMathCS50Progress", JSON.stringify(state.cs50Progress));
  localStorage.setItem("firmwareMathQuizLength", String(state.quizLength));
  localStorage.setItem("firmwareMathTheme", state.theme);
}

function saveQuizSession() {
  if (!state.quizQueue.length || state.quizDone) return;
  localStorage.setItem("firmwareMathQuizSession", JSON.stringify({
    queue: state.quizQueue,
    qIdx: state.qIdx,
    score: state.score,
    input: state.input,
    feedback: state.feedback,
    showHint: state.showHint,
    quizTopic: state.quizTopic,
    quizLevel: state.quizLevel,
    quizLength: state.quizLength,
  }));
}

function clearQuizSession() {
  localStorage.removeItem("firmwareMathQuizSession");
}

function restoreQuizSession() {
  const saved = localStorage.getItem("firmwareMathQuizSession");
  if (!saved) return false;
  try {
    const session = JSON.parse(saved);
    if (!session.queue || !session.queue.length) { clearQuizSession(); return false; }
    state.quizQueue = session.queue;
    state.qIdx = session.qIdx ?? 0;
    state.score = session.score ?? 0;
    state.input = session.input ?? "";
    state.feedback = session.feedback ?? null;
    state.showHint = session.showHint ?? false;
    state.quizTopic = session.quizTopic ?? "All";
    state.quizLevel = session.quizLevel ?? "Easy";
    state.quizLength = session.quizLength ?? 10;
    state.quizDone = false;
    return true;
  } catch { clearQuizSession(); return false; }
}

function saveCS50Session() {
  if (!state.cs50Queue.length) return;
  localStorage.setItem("firmwareMathCS50Session", JSON.stringify({
    queue: state.cs50Queue,
    cs50QIdx: state.cs50QIdx,
    cs50Score: state.cs50Score,
    cs50Input: state.cs50Input,
    cs50Feedback: state.cs50Feedback,
    cs50ShowHint: state.cs50ShowHint,
    cs50CurrentWeek: state.cs50CurrentWeek,
    cs50Level: state.cs50Level,
  }));
}

function clearCS50Session() {
  localStorage.removeItem("firmwareMathCS50Session");
}

function restoreCS50Session() {
  const saved = localStorage.getItem("firmwareMathCS50Session");
  if (!saved) return false;
  try {
    const session = JSON.parse(saved);
    if (!session.queue || !session.queue.length) { clearCS50Session(); return false; }
    state.cs50Queue = session.queue;
    state.cs50QIdx = session.cs50QIdx ?? 0;
    state.cs50Score = session.cs50Score ?? 0;
    state.cs50Input = session.cs50Input ?? "";
    state.cs50Feedback = session.cs50Feedback ?? null;
    state.cs50ShowHint = session.cs50ShowHint ?? false;
    state.cs50CurrentWeek = session.cs50CurrentWeek ?? null;
    state.cs50Level = session.cs50Level ?? "Easy";
    return true;
  } catch { clearCS50Session(); return false; }
}

function saveFoundationSession() {
  if (!state.fQueue.length) return;
  localStorage.setItem("firmwareMathFoundSession", JSON.stringify({
    queue: state.fQueue,
    fIdx: state.fIdx,
    fScore: state.fScore,
    fInput: state.fInput,
    fFeedback: state.fFeedback,
    fShowHint: state.fShowHint,
    fLevel: state.foundationsCurrentLevel,
    fLength: state.foundationsQuizLength,
  }));
}

function clearFoundationSession() {
  localStorage.removeItem("firmwareMathFoundSession");
}

function restoreFoundationSession() {
  const saved = localStorage.getItem("firmwareMathFoundSession");
  if (!saved) return false;
  try {
    const session = JSON.parse(saved);
    if (!session.queue || !session.queue.length) { clearFoundationSession(); return false; }
    state.fQueue = session.queue;
    state.fIdx = session.fIdx ?? 0;
    state.fScore = session.fScore ?? 0;
    state.fInput = session.fInput ?? "";
    state.fFeedback = session.fFeedback ?? null;
    state.fShowHint = session.fShowHint ?? false;
    state.foundationsCurrentLevel = session.fLevel ?? 0;
    state.foundationsQuizLength = session.fLength ?? 25;
    state.foundationsView = "checkpoint";
    return true;
  } catch { clearFoundationSession(); return false; }
}

function scoreKey(topic, level = state.quizLevel) {
  return `${level}::${topic}`;
}

function getTopicScore(topic, level = state.quizLevel) {
  return state.topicScores[scoreKey(topic, level)] || 0;
}

function allTopicsAtLeast(level, pct) {
  return STUDY_GUIDE.every((topic) => getTopicScore(GUIDE_TO_QUIZ_TOPIC[topic.id], level) >= pct);
}

function isLevelUnlocked(level) {
  if (level === "Easy") return true;
  if (level === "Intermediate") return allTopicsAtLeast("Easy", 90);
  if (level === "Advanced") return allTopicsAtLeast("Intermediate", 90);
  return false;
}

function topicIndexByQuizTopic(quizTopic) {
  return STUDY_GUIDE.findIndex((topic) => GUIDE_TO_QUIZ_TOPIC[topic.id] === quizTopic);
}

function isGuideTopicUnlocked(index, level = state.quizLevel) {
  if (!isLevelUnlocked(level)) return false;
  if (index === 0) return true;
  const previousTopic = GUIDE_TO_QUIZ_TOPIC[STUDY_GUIDE[index - 1].id];
  return getTopicScore(previousTopic, level) >= 90;
}

function isQuizTopicUnlocked(quizTopic, level = state.quizLevel) {
  if (!isLevelUnlocked(level)) return false;
  if (quizTopic === "All") return true;
  const index = topicIndexByQuizTopic(quizTopic);
  return index === -1 ? true : isGuideTopicUnlocked(index, level);
}

function highestUnlockedGuideIndex(level = state.quizLevel) {
  let highest = 0;
  for (let i = 1; i < STUDY_GUIDE.length; i += 1) {
    if (isGuideTopicUnlocked(i, level)) highest = i;
  }
  return highest;
}

function switchTab(tab) {
  state.tab = tab;
  document.querySelectorAll(".tab").forEach((button) => button.classList.toggle("active", button.dataset.tab === tab));
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active"));
  $(`${tab}Panel`).classList.add("active");
  if (tab === "study") { renderStudy(); return; }
  if (tab === "progress") renderProgress();
  if (tab === "foundations") renderFoundations();
  if (tab === "cs50") renderCS50();
}

function renderStudy() {
  const sub = state.studySubTab;
  $("studyView").innerHTML = `
    <nav class="study-sub-tabs">
      <button class="sub-tab ${sub === "guide" ? "active" : ""}" data-sub="guide">Study Guide</button>
      <button class="sub-tab ${sub === "quiz" ? "active" : ""}" data-sub="quiz">Quiz</button>
      <button class="sub-tab ${sub === "resources" ? "active" : ""}" data-sub="resources">Resources</button>
    </nav>
    <div id="studySubContent"></div>`;
  document.querySelectorAll(".sub-tab").forEach((btn) => btn.addEventListener("click", () => {
    state.studySubTab = btn.dataset.sub;
    renderStudy();
  }));
  if (sub === "guide") renderGuideList();
  else if (sub === "quiz") renderQuizSetup();
  else renderResources();
}

function renderGuideList() {
  if (!isLevelUnlocked(state.quizLevel)) state.quizLevel = "Easy";
  state.studySubTab = "guide";
  $("studySubContent").innerHTML = `
    <p class="section-intro">${STUDY_GUIDE.length} topics unlock in order from embedded foundations to TinyML deployment. Easy opens first; Intermediate opens after every Easy topic at 90%; Advanced opens after every Intermediate topic at 90%.</p>
    ${trackSelectorHtml("guide")}
    <div class="guide-grid">
      ${STUDY_GUIDE.map((topic, index) => {
        const unlocked = isGuideTopicUnlocked(index);
        const quizTopic = GUIDE_TO_QUIZ_TOPIC[topic.id];
        const best = getTopicScore(quizTopic);
        return `
        <button class="card guide-card ${unlocked ? "" : "locked"}" data-guide="${topic.id}" ${unlocked ? "" : "disabled"}>
          <span class="tag ${tagClass(topic.tag)}">${esc(topic.tag)}</span>
          <h2>${esc(topic.title)}</h2>
          <p>${esc(topic.why.slice(0, 118))}...</p>
          <div class="card-action">${unlocked ? `View guide -> Best quiz: ${best}%` : "Locked: score 90% on previous topic"}</div>
        </button>
      `;
      }).join("")}
    </div>`;
  bindTrackSelectors(renderGuideList);
  document.querySelectorAll("[data-guide]").forEach((button) => {
    button.addEventListener("click", () => renderGuideDetail(button.dataset.guide));
  });
}

function trackSelectorHtml(context) {
  return `<div class="track-switch" aria-label="${context} track">
    ${LEVELS.map((level) => {
      const locked = !isLevelUnlocked(level);
      return `<button class="track-button ${state.quizLevel === level ? "active" : ""} ${locked ? "locked" : ""}" data-track="${level}" ${locked ? "disabled" : ""}>${level}${locked ? " locked" : ""}</button>`;
    }).join("")}
  </div>`;
}

function bindTrackSelectors(afterChange) {
  document.querySelectorAll("[data-track]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!isLevelUnlocked(button.dataset.track)) return;
      state.quizLevel = button.dataset.track;
      state.quizTopic = "All";
      afterChange();
      renderProgress();
    });
  });
}

function renderGuideDetail(id) {
  const topic = STUDY_GUIDE.find((item) => item.id === id);
  const topicIndex = STUDY_GUIDE.findIndex((item) => item.id === id);
  if (!isGuideTopicUnlocked(topicIndex)) {
    renderGuideList();
    return;
  }
  $("studySubContent").innerHTML = `
    <button class="back" id="backToGuides">← All Topics</button>
    <article class="detail">
      <span class="tag ${tagClass(topic.tag)}">${esc(topic.tag)}</span>
      <h2>${esc(topic.title)}</h2>
      <div class="detail-grid">
        <div>
          <div class="why-box"><div class="label" style="margin-top:0">WHY THIS MATTERS</div><p>${esc(topic.why)}</p></div>
          <div class="label">TOPICS TO MASTER</div>
          <div class="topic-list">
            ${topic.topics.map(([name, note]) => `<div class="topic-row"><strong>${esc(name)}</strong><span>${esc(note)}</span></div>`).join("")}
          </div>
        </div>
        <div>
          <div class="label" style="margin-top:0">REAL EMBEDDED EXAMPLES</div>
          <div class="examples">${topic.examples.map((example) => `<div class="example-line">${esc(example)}</div>`).join("")}</div>
          <div class="resource-box" style="margin-top:16px"><strong>Recommended resource</strong><br>${esc(topic.resource)}</div>
          <button class="primary practice-button" id="practiceTopic">Practice this topic -></button>
        </div>
      </div>
    </article>`;
  $("backToGuides").addEventListener("click", renderGuideList);
  $("practiceTopic").addEventListener("click", () => {
    state.quizTopic = guideTitleToQuizTopic(topic.title);
    state.quizLevel = "Intermediate";
    state.quizDone = false;
    state.studySubTab = "quiz";
    switchTab("study");
  });
}

function guideTitleToQuizTopic(title) {
  const topic = STUDY_GUIDE.find((item) => item.title === title);
  if (topic) return GUIDE_TO_QUIZ_TOPIC[topic.id] || "All";
  if (title.includes("Number")) return "Number Systems";
  if (title.includes("Bit")) return "Bit Manipulation";
  if (title.includes("Algebra")) return "Algebra";
  if (title.includes("Boolean")) return "Boolean Logic";
  if (title.includes("Fixed")) return "Fixed-Point";
  if (title.includes("Modular")) return "Modular Arithmetic";
  if (title.includes("Calculus")) return "Calculus Concepts";
  if (title.includes("Trigonometry")) return "Trigonometry & Signals";
  return "All";
}

function renderQuizSetup() {
  if (!isLevelUnlocked(state.quizLevel)) state.quizLevel = "Easy";
  if (!isQuizTopicUnlocked(state.quizTopic)) state.quizTopic = "All";
  state.studySubTab = "quiz";
  const saved = localStorage.getItem("firmwareMathQuizSession");
  let resumeHtml = "";
  if (saved) {
    try {
      const session = JSON.parse(saved);
      if (session.queue && session.queue.length) {
        const total = session.queue.length;
        const cur = (session.qIdx ?? 0) + 1;
        resumeHtml = `<div class="resume-card"><span>Unfinished ${session.quizLevel} quiz · Q${cur}/${total} · ${session.score ?? 0} correct</span><div><button class="primary" id="resumeQuizBtn">Resume</button><button class="secondary" id="discardQuizBtn" style="margin-left:8px">Start from first</button></div></div>`;
      }
    } catch {}
  }
  $("studySubContent").innerHTML = `
    <p class="section-intro">${QUIZ_BANK.length} questions across embedded software and TinyML math. Choose exam length, then run a focused mastery quiz.</p>
    ${resumeHtml}
    <div class="filter-panel">
      <div><div class="filter-title">TRACK</div>${trackSelectorHtml("quiz")}</div>
      <div><div class="filter-title">TOPIC</div><div class="filter-buttons">${TOPICS.map((topic) => {
        const locked = !isQuizTopicUnlocked(topic);
        const score = topic === "All" ? "" : ` ${getTopicScore(topic)}%`;
        return `<button class="filter-button ${state.quizTopic === topic ? "active" : ""} ${locked ? "locked" : ""}" data-topic="${topic}" ${locked ? "disabled" : ""}>${topic}${score}</button>`;
      }).join("")}</div></div>
      <div><div class="filter-title">EXAM LENGTH</div><div class="length-buttons">${EXAM_LENGTHS.map((count) => `<button class="length-button ${state.quizLength === count ? "active" : ""}" data-length="${count}">${count}</button>`).join("")}</div></div>
      <button class="primary" id="startQuiz">Start Exam (${state.quizLength} questions) -></button>
    </div>`;
  if (resumeHtml) {
    $("resumeQuizBtn").addEventListener("click", () => {
      restoreQuizSession();
      renderQuestion();
    });
    $("discardQuizBtn").addEventListener("click", () => {
      clearQuizSession();
      renderQuizSetup();
    });
  }
  bindTrackSelectors(renderQuizSetup);
  document.querySelectorAll("[data-topic]").forEach((button) => button.addEventListener("click", () => {
    state.quizTopic = button.dataset.topic;
    renderQuizSetup();
  }));
  document.querySelectorAll("[data-length]").forEach((button) => button.addEventListener("click", () => {
    state.quizLength = Number(button.dataset.length);
    saveProgress();
    renderQuizSetup();
  }));
  $("startQuiz").addEventListener("click", startQuiz);
}

function startQuiz() {
  clearQuizSession();
  let pool = QUIZ_BANK;
  if (!isQuizTopicUnlocked(state.quizTopic)) {
    state.quizTopic = TOPICS.find((topic) => topic !== "All" && isQuizTopicUnlocked(topic)) || "All";
    renderQuizSetup();
    return;
  }
  if (state.quizTopic === "All") pool = pool.filter((q) => isQuizTopicUnlocked(q.topic));
  if (state.quizTopic !== "All") pool = pool.filter((q) => q.topic === state.quizTopic);
  pool = pool.filter((q) => q.level === state.quizLevel);
  if (!pool.length) {
    renderQuizSetup();
    return;
  }
  state.quizQueue = shuffle(pool).slice(0, Math.min(state.quizLength, pool.length));
  state.qIdx = 0;
  state.input = "";
  state.feedback = null;
  state.showHint = false;
  state.score = 0;
  state.quizDone = false;
  saveQuizSession();
  renderQuestion();
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderQuestion() {
  const q = state.quizQueue[state.qIdx];
  $("studySubContent").innerHTML = `
    <div class="quiz-box">
      <div class="quiz-top"><span>Exam: ${state.quizLevel} · ${state.quizQueue.length} questions</span><span>Question ${state.qIdx + 1} / ${state.quizQueue.length} · ${state.score} correct</span></div>
      <div class="dots">${state.quizQueue.map((_, i) => `<div class="dot ${i < state.qIdx ? "done" : i === state.qIdx ? "current" : ""}"></div>`).join("")}</div>
      <div class="topic-badge">${esc(q.topic)} · Level ${q.level}</div>
      <div class="question ${state.feedback || ""}">${esc(q.q)}</div>
      ${state.feedback ? `<div class="feedback ${state.feedback}">${state.feedback === "correct" ? "Correct." : `Answer: ${q.a}`}</div>` : ""}
      ${state.showHint && !state.feedback ? `<div class="hint">Hint: ${esc(q.hint)}</div>` : ""}
      <input id="answerInput" class="answer-input" type="number" inputmode="numeric" placeholder="Enter numeric answer..." value="${esc(state.input)}" ${state.feedback ? "disabled" : ""} autofocus />
      <div class="quiz-actions">
        <button class="secondary" id="hintButton" ${state.showHint || state.feedback ? "disabled" : ""}>Show hint</button>
        <button class="primary" id="submitAnswer" ${state.feedback ? "disabled" : ""}>Submit -></button>
      </div>
    </div>`;
  const input = $("answerInput");
  input.focus();
  input.addEventListener("input", () => {
    state.input = input.value;
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") submitAnswer();
  });
  $("hintButton").addEventListener("click", () => {
    state.showHint = true;
    renderQuestion();
  });
  $("submitAnswer").addEventListener("click", submitAnswer);
}

function submitAnswer() {
  if (state.feedback || state.input === "") return;
  const q = state.quizQueue[state.qIdx];
  const correct = Number.parseInt(state.input, 10) === q.a;
  state.feedback = correct ? "correct" : "wrong";
  if (correct) state.score += 1;
  state.allResults[q.id] = correct;
  saveProgress();
  saveQuizSession();
  renderQuestion();
  window.setTimeout(() => {
    state.feedback = null;
    state.showHint = false;
    state.input = "";
    if (state.qIdx + 1 >= state.quizQueue.length) {
      finishQuiz();
    } else {
      state.qIdx += 1;
      renderQuestion();
    }
  }, 950);
}

function finishQuiz() {
  clearQuizSession();
  const pct = Math.round((state.score / state.quizQueue.length) * 100);
  const topicWasSpecific = state.quizTopic !== "All";
  let unlockedNext = false;
  if (topicWasSpecific) {
    const key = scoreKey(state.quizTopic);
    const previousBest = state.topicScores[key] || 0;
    state.topicScores[key] = Math.max(previousBest, pct);
    const completedIndex = topicIndexByQuizTopic(state.quizTopic);
    unlockedNext = pct >= 90 && completedIndex >= 0 && completedIndex < STUDY_GUIDE.length - 1;
    saveProgress();
    renderGuideList();
  }
  $("studySubContent").innerHTML = `
    <div class="result-card">
      <h2>${pct >= 80 ? "Solid work!" : pct >= 60 ? "Getting there!" : "Keep studying."}</h2>
      <div class="result-score">${state.score}<span style="font-size:2rem;color:var(--dim)"> / ${state.quizQueue.length}</span></div>
      <p class="section-intro">${pct}% score on ${state.quizLevel}. ${topicWasSpecific ? (pct >= 90 ? (unlockedNext ? `Next ${state.quizLevel} topic unlocked.` : (state.quizLevel === "Easy" && isLevelUnlocked("Intermediate") ? "Easy mastered. Intermediate track unlocked." : state.quizLevel === "Intermediate" && isLevelUnlocked("Advanced") ? "Intermediate mastered. Advanced track unlocked." : "Topic mastered.")) : `Score 90% or higher on this ${state.quizLevel} topic to unlock the next one.`) : "Topic unlocking only happens on a specific topic quiz, not All."}</p>
      <div class="result-actions">
        <button class="primary" id="retryQuiz">Change filters & retry</button>
        <button class="secondary" id="backGuide">Back to Guide</button>
      </div>
    </div>`;
  $("retryQuiz").addEventListener("click", renderQuizSetup);
  $("backGuide").addEventListener("click", () => { state.studySubTab = "guide"; switchTab("study"); });
}

function renderProgress() {
  const attemptedIds = Object.keys(state.allResults);
  const correct = Object.values(state.allResults).filter(Boolean).length;
  const attempted = attemptedIds.length;
  const easyUnlockedCount = highestUnlockedGuideIndex("Easy") + 1;
  const intermediateUnlockedCount = highestUnlockedGuideIndex("Intermediate") + 1;
  const advancedUnlockedCount = isLevelUnlocked("Advanced") ? highestUnlockedGuideIndex("Advanced") + 1 : 0;
  if (!attempted) {
    $("progressView").innerHTML = `<p class="section-intro">Your quiz history and topic unlocks are saved in this browser on this computer.</p><div class="empty">No attempts yet. Take a quiz or Cs50x checkpoint first.</div>${roadmapHtml()}`;
    return;
  }
  $("progressView").innerHTML = `
    <p class="section-intro">Saved quiz history for this offline app.</p>
    <div class="progress-grid">
      <div class="stat"><strong style="color:var(--green)">${correct}</strong><span>Correct</span></div>
      <div class="stat"><strong style="color:var(--red)">${attempted - correct}</strong><span>Wrong</span></div>
      <div class="stat"><strong style="color:var(--blue)">${Math.round((correct / attempted) * 100)}%</strong><span>Accuracy</span></div>
      <div class="stat"><strong style="color:var(--cyan)">${easyUnlockedCount}/${STUDY_GUIDE.length}</strong><span>Easy</span></div>
      <div class="stat"><strong style="color:var(--amber)">${intermediateUnlockedCount}/${STUDY_GUIDE.length}</strong><span>Intermediate</span></div>
      <div class="stat"><strong style="color:var(--violet)">${advancedUnlockedCount}/${STUDY_GUIDE.length}</strong><span>Advanced</span></div>
    </div>
    <div class="label">SECTION COMPLETION</div>
    <div class="topic-progress-row"><strong>CS Fundamentals</strong><div class="bar"><div class="bar-fill" style="width:${Math.round(STUDY_GUIDE.filter((_, i) => getTopicScore(GUIDE_TO_QUIZ_TOPIC[STUDY_GUIDE[i].id], "Easy") >= 90).length / STUDY_GUIDE.length * 100)}%"></div></div><span>${Math.round(STUDY_GUIDE.filter((_, i) => getTopicScore(GUIDE_TO_QUIZ_TOPIC[STUDY_GUIDE[i].id], "Easy") >= 90).length / STUDY_GUIDE.length * 100)}%</span></div>
    <div class="topic-progress-row"><strong>CS50x</strong><div class="bar"><div class="bar-fill" style="width:${Math.round(CS50_WEEKS.filter((w) => getCS50WeekScore(w.id, "Intermediate") >= 80).length / CS50_WEEKS.length * 100)}%"></div></div><span>${Math.round(CS50_WEEKS.filter((w) => getCS50WeekScore(w.id, "Intermediate") >= 80).length / CS50_WEEKS.length * 100)}%</span></div>
    <div class="topic-progress-row"><strong>Maths Foundations</strong><div class="bar"><div class="bar-fill" style="width:${Math.round(FOUNDATIONS.filter((l) => getFoundationScore(l.id, "Easy") >= 80).length / FOUNDATIONS.length * 100)}%"></div></div><span>${Math.round(FOUNDATIONS.filter((l) => getFoundationScore(l.id, "Easy") >= 80).length / FOUNDATIONS.length * 100)}%</span></div>
    <div class="label">EASY BEST SCORES</div>
    ${STUDY_GUIDE.map((topic, index) => {
      const quizTopic = GUIDE_TO_QUIZ_TOPIC[topic.id];
      const best = getTopicScore(quizTopic, "Easy");
      const unlocked = isGuideTopicUnlocked(index, "Easy");
      return `<div class="topic-progress-row"><strong>${esc(topic.title)}</strong><div class="bar"><div class="bar-fill" style="width:${best}%"></div></div><span>${unlocked ? `${best}%` : "Locked"}</span></div>`;
    }).join("")}
    <div class="label">INTERMEDIATE BEST SCORES</div>
    ${STUDY_GUIDE.map((topic, index) => {
      const quizTopic = GUIDE_TO_QUIZ_TOPIC[topic.id];
      const best = getTopicScore(quizTopic, "Intermediate");
      const unlocked = isGuideTopicUnlocked(index, "Intermediate");
      return `<div class="topic-progress-row"><strong>${esc(topic.title)}</strong><div class="bar"><div class="bar-fill" style="width:${best}%"></div></div><span>${unlocked ? `${best}%` : "Locked"}</span></div>`;
    }).join("")}
    <div class="label">ADVANCED BEST SCORES</div>
    ${STUDY_GUIDE.map((topic, index) => {
      const quizTopic = GUIDE_TO_QUIZ_TOPIC[topic.id];
      const best = getTopicScore(quizTopic, "Advanced");
      const unlocked = isGuideTopicUnlocked(index, "Advanced");
      return `<div class="topic-progress-row"><strong>${esc(topic.title)}</strong><div class="bar"><div class="bar-fill" style="width:${best}%"></div></div><span>${unlocked ? `${best}%` : "Locked"}</span></div>`;
    }).join("")}
    <div class="label">CS50x WEEK SCORES (Intermediate shown, per-difficulty tracking saved)</div>
    ${CS50_WEEKS.map((week) => {
      const score = getCS50WeekScore(week.id, "Intermediate");
      const unlocked = isCS50WeekUnlocked(CS50_WEEKS.indexOf(week));
      return `<div class="topic-progress-row"><strong>${esc(week.title)}</strong><div class="bar"><div class="bar-fill" style="width:${score}%"></div></div><span>${unlocked ? (score > 0 ? score + "%" : "Not started") : "Locked"}</span></div>`;
    }).join("")}
    <div class="label">MATHS FOUNDATIONS SCORES (Easy shown, per-difficulty saved)</div>
    ${FOUNDATIONS.map((level, index) => {
      const score = getFoundationScore(level.id, "Easy");
      const unlocked = index === 0 || (state.foundationsScores[`Easy::found::${FOUNDATIONS[index - 1].id}`] || 0) >= 80;
      return `<div class="topic-progress-row"><strong>${esc(level.title)}</strong><div class="bar"><div class="bar-fill" style="width:${score}%"></div></div><span>${unlocked ? (score > 0 ? score + "%" : "Not started") : "Locked"}</span></div>`;
    }).join("")}`;
}

function topicProgressHtml(topic) {
  const questions = QUIZ_BANK.filter((q) => q.topic === topic);
  const attempted = questions.filter((q) => state.allResults[q.id] !== undefined);
  if (!attempted.length) return "";
  const correct = attempted.filter((q) => state.allResults[q.id]).length;
  const pct = Math.round((correct / attempted.length) * 100);
  return `<div class="topic-progress-row"><strong>${esc(topic)}</strong><div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div><span>${pct}%</span></div>`;
}

function roadmapHtml() {
  const rows = [
    ["Phase 1", "Number systems, bit manipulation, Boolean logic, and register-level thinking"],
    ["Phase 2", "Algebra, fixed-point arithmetic, modular wraparound, and timer math"],
    ["Phase 3", "Calculus intuition, trigonometry, sampling, filters, and signal features"],
    ["Phase 4", "Control systems: feedback, PID, stability, update rates, and saturation"],
    ["Phase 5", "Statistics, probability, normalization, noise, and dataset quality"],
    ["Phase 6", "Linear algebra: vectors, matrices, dot products, tensor shapes, dense layers"],
    ["Phase 7", "ML fundamentals: labels, losses, gradient descent, batches, and evaluation"],
    ["Phase 8", "Neural networks: activations, convolutions, parameter counts, memory cost"],
    ["Phase 9", "TinyML deployment: int8 quantization, precision, latency, RAM, flash, power"],
  ];
  return `<div class="label">YOUR LEARNING ROADMAP</div>${rows.map(([phase, task]) => `<div class="roadmap-row"><strong>${esc(phase)}</strong><span>${esc(task)}</span></div>`).join("")}`;
}

function renderResources() {
  state.studySubTab = "resources";
  $("studySubContent").innerHTML = `
    <p class="section-intro">Khan Academy videos and exercises mapped to each topic. <strong>All Khan Academy content is available for free at <a href="https://www.khanacademy.org" target="_blank" rel="noopener">www.khanacademy.org</a></strong>.</p>
    <div class="resource-grid">
      ${RESOURCES.map((res) => {
        const guideTopic = STUDY_GUIDE.find((t) => GUIDE_TO_QUIZ_TOPIC[t.id] === res.topic);
        const tag = guideTopic ? guideTopic.tag : "";
        return `
        <button class="card resource-card" data-resource="${esc(res.topic)}">
          ${tag ? `<span class="tag ${tagClass(tag)}">${esc(tag)}</span>` : ""}
          <h2>${esc(res.topic)}</h2>
          <p>${res.videos.length} video${res.videos.length !== 1 ? "s" : ""}${res.exerciseUrl ? " + exercise" : ""}</p>
          <div class="card-action">Open resources -></div>
        </button>`;
      }).join("")}
    </div>`;
  document.querySelectorAll("[data-resource]").forEach((button) => {
    button.addEventListener("click", () => renderResourceDetail(button.dataset.resource));
  });
}

function renderResourceDetail(topic) {
  const res = RESOURCES.find((r) => r.topic === topic);
  if (!res) { renderResources(); return; }
  $("studySubContent").innerHTML = `
    <button class="back" id="backToResources">← All Resources</button>
    <div class="resource-detail">
      <h2>${esc(res.topic)}</h2>
      ${res.videos.map((v) => `
        <div class="resource-video">
          <h3>${esc(v.title)} <span class="muted">(${esc(v.channel || "YouTube")})</span></h3>
          <div class="video-wrapper">
            ${v.youtubeId && v.youtubeId !== "hex"
              ? `<iframe src="https://www.youtube.com/embed/${v.youtubeId}" title="${esc(v.title)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
              : v.url
                ? `<p><a href="${v.url}" target="_blank" rel="noopener">Watch on Khan Academy →</a></p>`
                : ""}
          </div>
        </div>`).join("")}
      <div class="resource-links">
        ${res.exerciseUrl ? `<a class="primary resource-link" href="${res.exerciseUrl}" target="_blank" rel="noopener">Practice on Khan Academy →</a>` : ""}
        ${res.courseUrl ? `<a class="primary resource-link" href="${res.courseUrl}" target="_blank" rel="noopener">Free Course Playlist →</a>` : ""}
        <a class="secondary resource-link" href="${res.topicUrl}" target="_blank" rel="noopener">Topic Resources →</a>
      </div>
      <p class="attribution">Note: All Khan Academy content is available for free at <a href="https://www.khanacademy.org" target="_blank" rel="noopener">www.khanacademy.org</a>.</p>
    </div>`;
  $("backToResources").addEventListener("click", renderResources);
}

/* FOUNDATIONS TAB */

const FOUNDATIONS_LEVELS = ["Easy", "Intermediate", "Advanced"];

function isFoundationDifficultyUnlocked(difficulty) {
  if (difficulty === "Easy") return true;
  const prevLevel = difficulty === "Advanced" ? "Intermediate" : "Easy";
  return FOUNDATIONS.every((level) => {
    const key = `${prevLevel}::found::${level.id}`;
    return (state.foundationsScores[key] || 0) >= 80;
  });
}

function isFoundationLevelUnlocked(index) {
  if (index <= 0) return true;
  const prevId = FOUNDATIONS[index - 1].id;
  const key = `${state.foundationsLevel}::found::${prevId}`;
  return (state.foundationsScores[key] || 0) >= 80;
}

function getFoundationScore(levelId, difficulty) {
  const lvl = difficulty || state.foundationsLevel;
  return state.foundationsScores[`${lvl}::found::${levelId}`] || 0;
}

function renderFoundations() {
  state.foundationsView = "overview";
  $("foundationsView").innerHTML = `
    <p class="section-intro">A progressive maths foundation from basic arithmetic to calculus, built for the embedded TinyML engineer. Each level unlocks after scoring 80% or higher on its checkpoint quiz. Easy opens first; Intermediate after all Easy levels; Advanced after all Intermediate levels.</p>
    <div class="track-switch" aria-label="foundations difficulty">
      ${FOUNDATIONS_LEVELS.map((level) => {
        const locked = !isFoundationDifficultyUnlocked(level);
        return `<button class="track-button ${state.foundationsLevel === level ? "active" : ""} ${locked ? "locked" : ""}" data-foundtrack="${level}" ${locked ? "disabled" : ""}>${level}${locked ? " locked" : ""}</button>`;
      }).join("")}
    </div>
    <div class="foundations-path">
      ${FOUNDATIONS.map((level, index) => {
        const unlocked = isFoundationLevelUnlocked(index);
        const score = getFoundationScore(level.id);
        const attempted = score > 0;
        return `
        <div class="foundation-card ${unlocked ? "unlocked" : "locked"}" data-level="${index}">
          <div class="foundation-level-num">Level ${index + 1}</div>
          <h3>${esc(level.title)}</h3>
          <p>${esc(level.topics.join(" \u00b7 "))}</p>
          <div class="foundation-status">
            ${unlocked
              ? (attempted
                ? `<span class="foundation-score" style="color:${score >= 80 ? "var(--green)" : "var(--amber)"}">Best: ${score}%</span><span class="foundation-cta">Open \u2192</span>`
                : `<span class="foundation-cta">Start checkpoint \u2192</span>`)
              : `<span class="foundation-locked-msg">Score 80% on Level ${index} to unlock</span>`}
          </div>
        </div>`;
      }).join("")}
    </div>`;
  document.querySelectorAll("[data-foundtrack]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!isFoundationDifficultyUnlocked(btn.dataset.foundtrack)) return;
      state.foundationsLevel = btn.dataset.foundtrack;
      renderFoundations();
    });
  });
  document.querySelectorAll(".foundation-card.unlocked").forEach((card) => {
    card.addEventListener("click", () => renderFoundationLevel(Number(card.dataset.level)));
  });
}

function renderFoundationLevel(index) {
  if (!isFoundationLevelUnlocked(index)) { renderFoundations(); return; }
  const level = FOUNDATIONS[index];
  state.foundationsView = "level";
  state.foundationsCurrentLevel = index;
  const score = getFoundationScore(level.id);
  const passed = score >= 80;
  const lengths = [25, 50, 75];
  const foundSaved = localStorage.getItem("firmwareMathFoundSession");
  let foundResumeHtml = "";
  if (foundSaved && parseInt(JSON.parse(foundSaved).fLevel) === index) {
    try {
      const s = JSON.parse(foundSaved);
      if (s.queue && s.queue.length) {
        const cur = (s.fIdx ?? 0) + 1;
        foundResumeHtml = `<div class="resume-card"><span>Unfinished checkpoint · Q${cur}/${s.queue.length} · ${s.fScore ?? 0} correct</span><div><button class="primary" id="fResumeBtn">Resume</button><button class="secondary" id="fDiscardBtn" style="margin-left:8px">Start from first</button></div></div>`;
      }
    } catch {}
  }
  $("foundationsView").innerHTML = `
    <button class="back" id="backToFoundations">\u2190 All Levels</button>
    <article class="foundation-detail">
      <div class="foundation-level-num">Level ${index + 1}</div>
      <h2>${esc(level.title)}</h2>
      <div class="why-box"><div class="label" style="margin-top:0">WHY THIS MATTERS</div><p>${esc(level.why)}</p></div>
      <div class="label">TOPICS TO MASTER</div>
      <div class="foundation-topics">
        ${level.topics.map((t) => `<div class="foundation-topic-item">${esc(t)}</div>`).join("")}
      </div>
      <div class="label">LEARN & PRACTICE</div>
      <div class="foundation-resources">
        ${level.resources.map((r, ri) => `<button class="card resource-card" data-fres="${ri}"><h2>${esc(r.name)}</h2><p>${esc(r.subtitle || "")}</p><div class="card-action">Open resource →</div></button>`).join("")}
      </div>
      <div class="foundation-checkpoint-area">
        ${foundResumeHtml}
        ${score > 0 ? `<div class="foundation-score-badge">Best checkpoint score: <strong style="color:${passed ? "var(--green)" : "var(--amber)"}">${score}%</strong> ${passed ? "Passed" : "Keep trying for 80%"}</div>` : ""}
        <div class="filter-title">CHECKPOINT LENGTH</div>
        <div class="length-buttons">
          ${lengths.map((len) => `<button class="length-button ${state.foundationsQuizLength === len ? "active" : ""}" data-flength="${len}">${len}</button>`).join("")}
        </div>
        <button class="primary" id="startFoundationCheckpoint">
          ${score > 0 ? "Retry checkpoint \u2192" : "Take checkpoint \u2192"}
        </button>
        ${index < FOUNDATIONS.length - 1
          ? `<p class="foundation-unlock-note">${passed ? (isFoundationLevelUnlocked(index + 1) ? "Next level already unlocked." : "") : "Score 80% to unlock Level " + (index + 2)}</p>`
          : '<p class="foundation-unlock-note">Final level -- you completed the foundations path.</p>'}
      </div>
    </article>`;
  $("backToFoundations").addEventListener("click", renderFoundations);
  document.querySelectorAll("[data-flength]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.foundationsQuizLength = Number(btn.dataset.flength);
      saveProgress();
      renderFoundationLevel(index);
    });
  });
  $("startFoundationCheckpoint").addEventListener("click", startFoundationCheckpoint);
  const fResumeBtn = $("fResumeBtn");
  if (fResumeBtn) fResumeBtn.addEventListener("click", () => {
    restoreFoundationSession();
    renderFoundationQuestion();
  });
  const fDiscardBtn = $("fDiscardBtn");
  if (fDiscardBtn) fDiscardBtn.addEventListener("click", () => {
    clearFoundationSession();
    renderFoundationLevel(index);
  });
  document.querySelectorAll("[data-fres]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const ri = Number(btn.dataset.fres);
      const r = level.resources[ri];
      $("foundationsView").innerHTML = `
        <button class="back" id="backToResources">← Back to ${esc(level.title)}</button>
        <article class="foundation-detail">
          <h2>${esc(r.name)}</h2>
          <div class="why-box"><p>${esc(r.subtitle || "")}</p></div>
          <div class="label">RESOURCE LINK</div>
          <div style="display:flex;gap:10px">
            <a class="resource-link primary" href="${r.url}" target="_blank" rel="noopener">Open in new tab →</a>
          </div>
        </article>`;
      $("backToResources").addEventListener("click", () => renderFoundationLevel(index));
    });
  });
}

function makeFoundationQuestion(id, levelIndex, n) {
  const a = (n % 9) + 2;
  const b = ((n * 3) % 11) + 1;
  const c = ((n * 5) % 13) + 2;
  switch (levelIndex) {
    case 0:
      if (n % 5 === 0) return { id, q: `${a * 10} + ${b * 10} = ?`, a: a * 10 + b * 10, hint: "Add the tens." };
      if (n % 5 === 1) return { id, q: `${a} x ${b} = ?`, a: a * b, hint: "Multiply the numbers." };
      if (n % 5 === 2) return { id, q: `${a * 5} percent of ${b * 20} = ?`, a: a * b, hint: "Percent means per hundred." };
      if (n % 5 === 3) return { id, q: `${a} + ${b} x ${c} = ?`, a: a + b * c, hint: "Multiply before adding." };
      return { id, q: `${a * b * 2} / ${b * 2} = ?`, a: a, hint: "Division cancels multiplication." };
    case 1:
      if (n % 5 === 0) return { id, q: `x + ${a} = ${a + b}, x = ?`, a: b, hint: `Subtract ${a} from both sides.` };
      if (n % 5 === 1) return { id, q: `${a}x = ${a * b}, x = ?`, a: b, hint: `Divide both sides by ${a}.` };
      if (n % 5 === 2) return { id, q: `${a}(x + ${b}) = ${a * (b + 1)}, x = ?`, a: 1, hint: `Divide by ${a} first, then subtract ${b}.` };
      if (n % 5 === 3) return { id, q: `y = ${a}x + ${b}, if x = ${c}, y = ?`, a: a * c + b, hint: `Substitute: y = ${a}(${c}) + ${b}.` };
      return { id, q: `${a}x - ${b} = ${a * (b + 1) - b}, x = ?`, a: b + 1, hint: `Add ${b} first, then divide by ${a}.` };
    case 2:
      if (n % 5 === 0) return { id, q: `Slope (0,0) to (${a}, ${a * b}) = ?`, a: b, hint: `Slope = (${a*b})/(${a}).` };
      if (n % 5 === 1) return { id, q: `f(x) = ${a}x^2, f(${b}) = ?`, a: a * b * b, hint: `f(${b}) = ${a} x ${b}^2.` };
      if (n % 5 === 2) return { id, q: `x^2 = ${(a + 2) * (a + 2)}, positive x = ?`, a: a + 2, hint: "What positive number squared?" };
      if (n % 5 === 3) return { id, q: `y-intercept of y = ${a}x + ${b} = ?`, a: b, hint: "y-intercept is the constant term." };
      return { id, q: `${a}x + ${b} = ${a * c + b}, x = ?`, a: c, hint: `Subtract ${b}, then divide by ${a}.` };
    case 3:
      if (n % 5 === 0) return { id, q: `Area of ${a} x ${b} rectangle = ?`, a: a * b, hint: "Area = length x width." };
      if (n % 5 === 1) return { id, q: `Perimeter of ${a} x ${a} square = ?`, a: a * 4, hint: "Perimeter = 4 x side." };
      if (n % 5 === 2) return { id, q: `Volume of ${a} x ${a} x ${a} cube = ?`, a: a * a * a, hint: "Volume = side^3." };
      if (n % 5 === 3) return { id, q: `${a} meters = ? centimeters`, a: a * 100, hint: "1 meter = 100 cm." };
      return { id, q: `Area of ${a * 2} x ${b} rectangle = ?`, a: a * 2 * b, hint: "Area = length x width." };
    case 4:
      if (n % 3 === 0) return { id, q: `sin(0 degrees) = ?`, a: 0, hint: "Sine starts at zero." };
      if (n % 3 === 1) return { id, q: `cos(0 degrees) = ?`, a: 1, hint: "Cosine at 0 is maximum." };
      return { id, q: `A right angle measures how many degrees?`, a: 90, hint: "Right angle = 90 degrees." };
    case 5:
      if (n % 5 === 0) return { id, q: `2^${a} = ?`, a: 2 ** a, hint: `2 to the power ${a}.` };
      if (n % 5 === 1) return { id, q: `log2(${2 ** a}) = ?`, a: a, hint: `2^${a} = ${2 ** a}.` };
      if (n % 5 === 2) return { id, q: `10^${a} = ?`, a: 10 ** a, hint: `10 to the power ${a}.` };
      if (n % 5 === 3) return { id, q: `Next: ${a}, ${a * 2}, ${a * 4}, ${a * 8}, ?`, a: a * 16, hint: "Each term doubles." };
      return { id, q: `2^${a} x 2^${b} = 2^?`, a: a + b, hint: "Add exponents." };
    case 6:
      if (n % 5 === 0) return { id, q: `Value ${a} to ${a * 6} in ${a}s. Avg rate = ?`, a: 5, hint: `Rate = (${a * 6} - ${a}) / ${a}.` };
      if (n % 5 === 1) return { id, q: `Area of ${a} x ${b} rectangle = ?`, a: a * b, hint: "Area = base x height." };
      if (n % 5 === 2) return { id, q: `A ${a * 10} Hz signal period in ms = ?`, a: Math.round(1000 / (a * 10)), hint: "Period = 1000/f." };
      if (n % 5 === 3) return { id, q: `f(t) = ${a}t, f(${b}) = ?`, a: a * b, hint: `f(${b}) = ${a} x ${b}.` };
      return { id, q: `Slope of y = ${a}x + ${b} = ?`, a: a, hint: "Slope is the coefficient of x." };
    default:
      return { id, q: `${a} + ${b} = ?`, a: a + b, hint: "Add the two numbers." };
  }
}

function getFoundationPool(levelIndex, count) {
  const level = FOUNDATIONS[levelIndex];
  const core = level.checkpoint.map((q, i) => ({ ...q, id: `f-core-${levelIndex}-${i}` }));
  if (count <= core.length) return shuffle(core).slice(0, count);
  const generated = [];
  for (let i = 1; generated.length + core.length < count; i++) {
    generated.push(makeFoundationQuestion(20000 + i, levelIndex, i));
  }
  return shuffle([...core, ...generated]);
}

function startFoundationCheckpoint() {
  clearFoundationSession();
  state.fQueue = getFoundationPool(state.foundationsCurrentLevel, state.foundationsQuizLength);
  state.fIdx = 0;
  state.fInput = "";
  state.fFeedback = null;
  state.fShowHint = false;
  state.fScore = 0;
  state.foundationsView = "checkpoint";
  saveFoundationSession();
  renderFoundationQuestion();
}

function renderFoundationQuestion() {
  if (!state.fQueue.length || state.fIdx >= state.fQueue.length) {
    finishFoundationCheckpoint();
    return;
  }
  const q = state.fQueue[state.fIdx];
  $("foundationsView").innerHTML = `
    <div class="quiz-box">
      <div class="quiz-top"><span>Checkpoint: ${esc(FOUNDATIONS[state.foundationsCurrentLevel].title)}</span><span>${state.fScore} correct</span></div>
      <div class="dots">${state.fQueue.map((_, i) => `<div class="dot ${i < state.fIdx ? "done" : i === state.fIdx ? "current" : ""}"></div>`).join("")}</div>
      <div class="topic-badge">Question ${state.fIdx + 1} of ${state.fQueue.length}</div>
      <div class="question ${state.fFeedback || ""}">${esc(q.q)}</div>
      ${state.fFeedback ? `<div class="feedback ${state.fFeedback}">${state.fFeedback === "correct" ? "Correct." : "Answer: " + q.a}</div>` : ""}
      ${state.fShowHint && !state.fFeedback ? `<div class="hint">Hint: ${esc(q.hint)}</div>` : ""}
      <input id="fAnswerInput" class="answer-input" type="number" inputmode="numeric" placeholder="Enter numeric answer..." value="${esc(state.fInput)}" ${state.fFeedback ? "disabled" : ""} autofocus />
      <div class="quiz-actions">
        <button class="secondary" id="fHintButton" ${state.fShowHint || state.fFeedback ? "disabled" : ""}>Show hint</button>
        <button class="primary" id="fSubmitAnswer" ${state.fFeedback ? "disabled" : ""}>Submit \u2192</button>
      </div>
    </div>`;
  const input = $("fAnswerInput");
  if (input) {
    input.focus();
    input.addEventListener("input", () => { state.fInput = input.value; });
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") submitFoundationAnswer(); });
  }
  const hintBtn = $("fHintButton");
  if (hintBtn) hintBtn.addEventListener("click", () => { state.fShowHint = true; renderFoundationQuestion(); });
  const submitBtn = $("fSubmitAnswer");
  if (submitBtn) submitBtn.addEventListener("click", submitFoundationAnswer);
}

function submitFoundationAnswer() {
  if (state.fFeedback || state.fInput === "") return;
  const q = state.fQueue[state.fIdx];
  const correct = Number.parseInt(state.fInput, 10) === q.a;
  state.fFeedback = correct ? "correct" : "wrong";
  if (correct) state.fScore += 1;
  saveFoundationSession();
  renderFoundationQuestion();
  window.setTimeout(() => {
    state.fFeedback = null;
    state.fShowHint = false;
    state.fInput = "";
    state.fIdx += 1;
    if (state.fIdx >= state.fQueue.length) {
      finishFoundationCheckpoint();
    } else {
      renderFoundationQuestion();
    }
  }, 900);
}

function finishFoundationCheckpoint() {
  clearFoundationSession();
  const pct = Math.round((state.fScore / state.fQueue.length) * 100);
  const level = FOUNDATIONS[state.foundationsCurrentLevel];
  const key = `${state.foundationsLevel}::found::${level.id}`;
  const prevBest = state.foundationsScores[key] || 0;
  state.foundationsScores[key] = Math.max(prevBest, pct);
  saveProgress();
  const passed = pct >= 80;
  const nextUnlocked = passed && state.foundationsCurrentLevel < FOUNDATIONS.length - 1;
  $("foundationsView").innerHTML = `
    <div class="result-card">
      <h2>${passed ? "Level passed!" : "Keep studying."}</h2>
      <div class="result-score">${state.fScore}<span style="font-size:2rem;color:var(--dim)"> / ${state.fQueue.length}</span></div>
      <p class="section-intro">${pct}% score on ${esc(level.title)}. ${passed ? (nextUnlocked ? "Level " + (state.foundationsCurrentLevel + 2) + " is now unlocked." : state.foundationsCurrentLevel >= FOUNDATIONS.length - 1 ? "You completed the foundations path!" : "Level mastered.") : "Score 80% or higher to unlock the next level."}</p>
      <div class="result-actions">
        <button class="primary" id="fBackToLevel">Back to level</button>
        <button class="secondary" id="fBackToPath">All levels</button>
      </div>
    </div>`;
  $("fBackToLevel").addEventListener("click", () => renderFoundationLevel(state.foundationsCurrentLevel));
  $("fBackToPath").addEventListener("click", renderFoundations);
}

/* Cs50x TAB */

function isCS50WeekUnlocked(index) {
  if (index <= 0) return true;
  const prevId = CS50_WEEKS[index - 1].id;
  const key = `${state.cs50Level}::cs50::${prevId}`;
  return (state.cs50Progress[key] || 0) >= 80;
}

function getCS50WeekScore(id, level) {
  const lvl = level || state.cs50Level;
  return state.cs50Progress[`${lvl}::cs50::${id}`] || 0;
}

function renderCS50() {
  $("cs50View").innerHTML = `
    <p class="section-intro">Harvard Cs50x: Introduction to Computer Science. Pass each week's checkpoint quiz (80%+) to unlock the next week. Easy opens first; Intermediate unlocks after all Easy weeks passed; Advanced after all Intermediate weeks passed.</p>
    <div class="track-switch" aria-label="cs50 difficulty">
      ${CS50_LEVELS.map((level) => {
        const locked = !isCS50DifficultyUnlocked(level);
        return `<button class="track-button ${state.cs50Level === level ? "active" : ""} ${locked ? "locked" : ""}" data-cs50track="${level}" ${locked ? "disabled" : ""}>${level}${locked ? " locked" : ""}</button>`;
      }).join("")}
    </div>
    <div class="cs50-path">
      ${CS50_WEEKS.map((week, index) => {
        const score = getCS50WeekScore(week.id);
        const unlocked = isCS50WeekUnlocked(index);
        const passed = score >= 80;
        return `
        <div class="cs50-card ${unlocked ? "" : "locked"} ${passed ? "done" : ""}" data-cs50="${week.id}">
          <div class="cs50-card-top">
            <span class="cs50-week-num">Week ${index}</span>
            ${passed ? '<span class="cs50-check" style="color:var(--green)">Passed</span>' : (score > 0 ? `<span class="cs50-check" style="color:var(--amber)">${score}%</span>` : '<span class="cs50-check" style="color:var(--dim)">Not started</span>')}
          </div>
          <h3>${esc(week.title)}</h3>
          ${unlocked
            ? `<p>${esc(week.topics.slice(0, 3).join(" \u00b7 "))} \u00b7\u00b7\u00b7</p><div class="cs50-card-action">Open week \u2192</div>`
            : `<p style="color:var(--muted);font-size:0.92rem;margin:0">Score 80% on the quiz for Week ${index} to unlock</p>`}
        </div>`;
      }).join("")}
    </div>`;
  document.querySelectorAll("[data-cs50track]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!isCS50DifficultyUnlocked(btn.dataset.cs50track)) return;
      state.cs50Level = btn.dataset.cs50track;
      renderCS50();
    });
  });
  document.querySelectorAll(".cs50-card:not(.locked)").forEach((card) => {
    card.addEventListener("click", () => renderCS50Week(card.dataset.cs50));
  });
}

function renderCS50Week(id) {
  const week = CS50_WEEKS.find((w) => w.id === id);
  if (!week) { renderCS50(); return; }
  const score = getCS50WeekScore(week.id);
  const passed = score >= 80;
  const weekIndex = CS50_WEEKS.indexOf(week);
  const nextUnlocked = isCS50WeekUnlocked(weekIndex + 1);
  const cs50Saved = localStorage.getItem("firmwareMathCS50Session");
  let cs50ResumeHtml = "";
  if (cs50Saved) {
    try {
      const s = JSON.parse(cs50Saved);
      if (s.queue && s.queue.length && s.cs50CurrentWeek === id) {
        const cur = (s.cs50QIdx ?? 0) + 1;
        cs50ResumeHtml = `<div class="resume-card"><span>Unfinished quiz · Q${cur}/${s.queue.length} · ${s.cs50Score ?? 0} correct</span><div><button class="primary" id="cs50ResumeBtn">Resume</button><button class="secondary" id="cs50DiscardBtn" style="margin-left:8px">Start from first</button></div></div>`;
      }
    } catch {}
  }
  $("cs50View").innerHTML = `
    <button class="back" id="backToCS50">\u2190 All Weeks</button>
    <article class="cs50-detail">
      <div class="cs50-week-num">${esc(week.title)}</div>
      <h2>${esc(week.title)}${passed ? ' <span style="color:var(--green);font-size:0.85rem;font-weight:800">Passed</span>' : ""}</h2>
      <div class="why-box"><div class="label" style="margin-top:0">WHY THIS MATTERS</div><p>${esc(week.why)}</p></div>
      <div class="label">TOPICS COVERED</div>
      <div class="cs50-topics">
        ${week.topics.map((t) => `<div class="cs50-topic-item">${esc(t)}</div>`).join("")}
      </div>
      <div class="label">PROBLEM SET</div>
      <div class="cs50-pset">${esc(week.pset)}</div>
      <div class="label">RESOURCES</div>
      <div class="cs50-resources">
        <a class="resource-link primary" href="${week.lectureUrl}" target="_blank" rel="noopener">CS50 Lecture Notes \u2192</a>
        <a class="resource-link primary" href="${week.psetUrl}" target="_blank" rel="noopener">Problem Set Page \u2192</a>
        <a class="resource-link secondary" href="${week.videoUrl}" target="_blank" rel="noopener">YouTube Playlist (Weeks 0\u20135) \u2192</a>
      </div>
      <div class="cs50-progress-area">
        ${cs50ResumeHtml}
        ${score > 0 ? `<div class="foundation-score-badge">Best quiz score: <strong style="color:${passed ? "var(--green)" : "var(--amber)"}">${score}%</strong> ${passed ? "Passed" : "Keep trying for 80%"}</div>` : ""}
        <button class="primary" id="startCS50Quiz">
          ${score > 0 ? "Retry quiz \u2192" : "Take checkpoint quiz \u2192"}
        </button>
        ${!passed && weekIndex < CS50_WEEKS.length - 1 ? `<p class="foundation-unlock-note">Score 80% to unlock ${esc(CS50_WEEKS[weekIndex + 1].title)}</p>` : ""}
        ${passed && weekIndex >= CS50_WEEKS.length - 1 ? '<p class="foundation-unlock-note">All Cs50x weeks completed!</p>' : ""}
        ${passed && nextUnlocked && weekIndex < CS50_WEEKS.length - 1 ? '<p class="foundation-unlock-note">' + esc(CS50_WEEKS[weekIndex + 1].title) + ' unlocked.</p>' : ""}
      </div>
    </article>`;
  $("backToCS50").addEventListener("click", () => { state.cs50CurrentWeek = null; state.cs50Queue = []; renderCS50(); });
  $("startCS50Quiz").addEventListener("click", () => startCS50Quiz(id));
  const cs50ResumeBtn = $("cs50ResumeBtn");
  if (cs50ResumeBtn) cs50ResumeBtn.addEventListener("click", () => {
    restoreCS50Session();
    renderCS50Question();
  });
  const cs50DiscardBtn = $("cs50DiscardBtn");
  if (cs50DiscardBtn) cs50DiscardBtn.addEventListener("click", () => {
    clearCS50Session();
    renderCS50Week(id);
  });
}

function startCS50Quiz(id) {
  clearCS50Session();
  const quiz = getCS50Quiz(id, state.cs50Level);
  if (!quiz || !quiz.length) { renderCS50Week(id); return; }
  state.cs50Queue = shuffle(quiz);
  state.cs50QIdx = 0;
  state.cs50Input = "";
  state.cs50Feedback = null;
  state.cs50ShowHint = false;
  state.cs50Score = 0;
  state.cs50CurrentWeek = id;
  saveCS50Session();
  renderCS50Question();
}

function renderCS50Question() {
  if (!state.cs50Queue.length || state.cs50QIdx >= state.cs50Queue.length) {
    finishCS50Quiz();
    return;
  }
  const q = state.cs50Queue[state.cs50QIdx];
  const week = CS50_WEEKS.find((w) => w.id === state.cs50CurrentWeek);
  $("cs50View").innerHTML = `
    <button class="back" id="cancelCS50Quiz">\u2190 Back to week</button>
    <div class="quiz-box">
      <div class="quiz-top"><span>Quiz: ${esc(week ? week.title : "")}</span><span>${state.cs50Score} correct</span></div>
      <div class="dots">${state.cs50Queue.map((_, i) => `<div class="dot ${i < state.cs50QIdx ? "done" : i === state.cs50QIdx ? "current" : ""}"></div>`).join("")}</div>
      <div class="topic-badge">Question ${state.cs50QIdx + 1} of ${state.cs50Queue.length}</div>
      <div class="question ${state.cs50Feedback || ""}">${esc(q.q)}</div>
      ${state.cs50Feedback ? `<div class="feedback ${state.cs50Feedback}">${state.cs50Feedback === "correct" ? "Correct." : "Answer: " + q.a}</div>` : ""}
      ${state.cs50ShowHint && !state.cs50Feedback ? `<div class="hint">Hint: ${esc(q.hint)}</div>` : ""}
      <input id="cs50AnswerInput" class="answer-input" type="number" inputmode="numeric" placeholder="Enter numeric answer..." value="${esc(state.cs50Input)}" ${state.cs50Feedback ? "disabled" : ""} autofocus />
      <div class="quiz-actions">
        <button class="secondary" id="cs50HintButton" ${state.cs50ShowHint || state.cs50Feedback ? "disabled" : ""}>Show hint</button>
        <button class="primary" id="cs50SubmitAnswer" ${state.cs50Feedback ? "disabled" : ""}>Submit \u2192</button>
      </div>
    </div>`;
  $("cancelCS50Quiz").addEventListener("click", () => {
    const weekId = state.cs50CurrentWeek;
    state.cs50CurrentWeek = null;
    state.cs50Queue = [];
    renderCS50Week(weekId);
  });
  const input = $("cs50AnswerInput");
  if (input) {
    input.focus();
    input.addEventListener("input", () => { state.cs50Input = input.value; });
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") submitCS50Answer(); });
  }
  const hb = $("cs50HintButton");
  if (hb) hb.addEventListener("click", () => { state.cs50ShowHint = true; renderCS50Question(); });
  const sb = $("cs50SubmitAnswer");
  if (sb) sb.addEventListener("click", submitCS50Answer);
}

function submitCS50Answer() {
  if (state.cs50Feedback || state.cs50Input === "") return;
  const q = state.cs50Queue[state.cs50QIdx];
  const correct = Number.parseInt(state.cs50Input, 10) === q.a;
  state.cs50Feedback = correct ? "correct" : "wrong";
  if (correct) state.cs50Score += 1;
  saveCS50Session();
  renderCS50Question();
  window.setTimeout(() => {
    state.cs50Feedback = null;
    state.cs50ShowHint = false;
    state.cs50Input = "";
    state.cs50QIdx += 1;
    if (state.cs50QIdx >= state.cs50Queue.length) {
      finishCS50Quiz();
    } else {
      renderCS50Question();
    }
  }, 900);
}

function finishCS50Quiz() {
  clearCS50Session();
  const totalQ = state.cs50Queue.length;
  const pct = Math.round((state.cs50Score / totalQ) * 100);
  const weekId = state.cs50CurrentWeek;
  const week = CS50_WEEKS.find((w) => w.id === weekId);
  state.cs50CurrentWeek = null;
  state.cs50Queue = [];
  if (week) {
    const key = `${state.cs50Level}::cs50::${week.id}`;
    const prevBest = state.cs50Progress[key] || 0;
    state.cs50Progress[key] = Math.max(prevBest, pct);
    saveProgress();
  }
  const passed = pct >= 80;
  const weekIndex = week ? CS50_WEEKS.indexOf(week) : -1;
  const nextUnlocked = passed && weekIndex >= 0 && weekIndex < CS50_WEEKS.length - 1;
  $("cs50View").innerHTML = `
    <div class="result-card">
      <h2>${passed ? "Week passed!" : "Keep studying."}</h2>
      <div class="result-score">${state.cs50Score}<span style="font-size:2rem;color:var(--dim)"> / ${totalQ}</span></div>
      <p class="section-intro">${pct}% score${week ? " on " + esc(week.title) : ""}. ${passed ? (nextUnlocked ? esc(CS50_WEEKS[weekIndex + 1].title) + " is now unlocked." : weekIndex >= CS50_WEEKS.length - 1 ? "You completed all Cs50x weeks!" : "Week mastered.") : "Score 80% or higher to unlock the next week."}</p>
      <div class="result-actions">
        <button class="primary" id="cs50BackToWeek">Back to week</button>
        <button class="secondary" id="cs50BackToAll">All weeks</button>
      </div>
    </div>`;
  $("cs50BackToWeek").addEventListener("click", () => renderCS50Week(weekId));
  $("cs50BackToAll").addEventListener("click", renderCS50);
}

document.querySelectorAll(".tab").forEach((button) => button.addEventListener("click", () => switchTab(button.dataset.tab)));
$("resetProgress").addEventListener("click", () => {
  if (!confirm("Reset saved quiz progress?")) return;
  state.allResults = {};
  state.topicScores = {};
  state.quizTopic = "All";
  saveProgress();
  state.studySubTab = "guide";
  switchTab("study");
  renderProgress();
});

function applyTheme(theme) {
  document.body.classList.toggle("light", theme === "light");
  const btn = $("themeToggle");
  if (btn) btn.textContent = theme === "light" ? "☀" : "☾";
}

$("themeToggle").addEventListener("click", () => {
  state.theme = state.theme === "light" ? "dark" : "light";
  applyTheme(state.theme);
  saveProgress();
});

applyTheme(state.theme);

renderStudy();
renderProgress();

const hasQuizSession = localStorage.getItem("firmwareMathQuizSession");
const hasFoundSession = localStorage.getItem("firmwareMathFoundSession");
const hasCS50Session = localStorage.getItem("firmwareMathCS50Session");
if (hasQuizSession || hasFoundSession || hasCS50Session) {
  const banner = document.createElement("div");
  banner.id = "resumeBanner";
  let label = "Unfinished quiz found — ";
  const count = [hasQuizSession, hasFoundSession, hasCS50Session].filter(Boolean).length;
  if (count > 1) label = "Unfinished quizzes found — ";
  banner.innerHTML = `${label}<a href="#" id="resumeBannerLink">Resume now</a> <span id="resumeBannerClose" style="cursor:pointer;margin-left:12px;opacity:.6">✕</span>`;
  document.body.prepend(banner);
  $("resumeBannerLink").addEventListener("click", (e) => {
    e.preventDefault();
    banner.remove();
    if (hasQuizSession) {
      state.studySubTab = "quiz";
      switchTab("study");
      const saved = localStorage.getItem("firmwareMathQuizSession");
      if (saved) {
        try {
          const session = JSON.parse(saved);
          if (session.queue && session.queue.length) {
            restoreQuizSession();
            renderQuestion();
          } else {
            clearQuizSession();
            renderQuizSetup();
          }
        } catch { renderQuizSetup(); }
      }
    } else if (hasCS50Session) {
      switchTab("cs50");
      const saved = localStorage.getItem("firmwareMathCS50Session");
      if (saved) {
        try {
          const session = JSON.parse(saved);
          if (session.queue && session.queue.length) {
            restoreCS50Session();
            renderCS50Question();
          } else {
            clearCS50Session();
            renderCS50();
          }
        } catch { renderCS50(); }
      }
    } else if (hasFoundSession) {
      switchTab("foundations");
      const saved = localStorage.getItem("firmwareMathFoundSession");
      if (saved) {
        try {
          const session = JSON.parse(saved);
          if (session.queue && session.queue.length) {
            restoreFoundationSession();
            renderFoundationQuestion();
          } else {
            clearFoundationSession();
            renderFoundations();
          }
        } catch { renderFoundations(); }
      }
    }
  });
  $("resumeBannerClose").addEventListener("click", () => banner.remove());
}
