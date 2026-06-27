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
      { q: "48 / 6 + 5 = ?", a: 13, hint: "Divide first: 48/6=8, then 8+5=13." },
      { q: "0.5 x 200 = ?", a: 100, hint: "Half of 200." },
      { q: "150 - 45 = ?", a: 105, hint: "Subtract the numbers." },
      { q: "Round 3.6 to nearest integer.", a: 4, hint: "0.6 >= 0.5 so round up." },
      { q: "12 x 15 = ?", a: 180, hint: "12 x 10 = 120, 12 x 5 = 60, sum = 180." },
      { q: "144 / 12 = ?", a: 12, hint: "144 divided by 12." },
      { q: "1/4 of 100 = ?", a: 25, hint: "Quarter of 100." },
      { q: "8 + 4 x 2 = ?", a: 16, hint: "Multiply first: 4x2=8, then 8+8." },
      { q: "-5 + 12 = ?", a: 7, hint: "Add a positive to a negative." },
      { q: "2^3 = ?", a: 8, hint: "2 x 2 x 2." },
      { q: "Average of 4, 8, 12 = ?", a: 8, hint: "(4+8+12)/3 = 24/3." },
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
      { q: "x / 5 = 10, x = ?", a: 50, hint: "Multiply both sides by 5." },
      { q: "x - 12 = 8, x = ?", a: 20, hint: "Add 12 to both sides." },
      { q: "2x + 5 = 15, x = ?", a: 5, hint: "Subtract 5, then divide by 2." },
      { q: "If y = 4x and x = 6, y = ?", a: 24, hint: "Substitute: y = 4 x 6." },
      { q: "x/2 + 3 = 7, x = ?", a: 8, hint: "Subtract 3, then multiply by 2." },
      { q: "6x = 42, x = ?", a: 7, hint: "Divide both sides by 6." },
      { q: "x/3 - 1 = 2, x = ?", a: 9, hint: "Add 1, then multiply by 3." },
      { q: "If V = IR, I=2, R=5, V = ?", a: 10, hint: "Ohm's Law: V = 2 x 5." },
      { q: "P = IV, I=3, V=4, P = ?", a: 12, hint: "P = 3 x 4." },
      { q: "2(x - 1) = 8, x = ?", a: 5, hint: "Divide by 2, then add 1." },
      { q: "If y = 2x + 3 and x = 0, y = ?", a: 3, hint: "y = 2(0) + 3." },
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
      { q: "f(x) = 3x - 1, f(4) = ?", a: 11, hint: "3(4) - 1 = 12 - 1." },
      { q: "Slope of line y = -2x + 7 = ?", a: -2, hint: "Coefficient of x." },
      { q: "x^2 = 144, x = ? (positive)", a: 12, hint: "12 x 12." },
      { q: "3x - 7 = 14, x = ?", a: 7, hint: "Add 7, then divide by 3." },
      { q: "Line through (0,3) with slope 2: y = 2x + ?", a: 3, hint: "y-intercept is 3." },
      { q: "f(x) = 5x - 2, f(2) = ?", a: 8, hint: "5(2) - 2 = 10 - 2." },
      { q: "x/2 + 5 = 10, x = ?", a: 10, hint: "Subtract 5, multiply by 2." },
      { q: "Slope of horizontal line y = 4 = ?", a: 0, hint: "Horizontal line has zero slope." },
      { q: "x + y = 10, x - y = 2. y = ?", a: 4, hint: "Subtract equations: 2y = 8." },
      { q: "x^2 = 81, positive x = ?", a: 9, hint: "9 x 9." },
      { q: "f(x) = 3x, f(1) + f(2) = ?", a: 9, hint: "f(1)+f(2)=3+6." },
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
      { q: "Area of triangle with base 6, height 4 = ?", a: 12, hint: "Area = 1/2 x 6 x 4." },
      { q: "Circumference of circle radius 5, pi=3: ?", a: 30, hint: "C = 2 x pi x r = 2 x 3 x 5." },
      { q: "1 kg = ? grams", a: 1000, hint: "Kilo means thousand." },
      { q: "Surface area of 3x3x3 cube = ?", a: 54, hint: "6 faces x 9 each." },
      { q: "Pythagorean: legs 6 and 8, hypotenuse = ?", a: 10, hint: "36 + 64 = 100, sqrt = 10." },
      { q: "Volume of cylinder radius 2 height 5, pi=3: ?", a: 60, hint: "V = pi x r^2 x h = 3 x 4 x 5." },
      { q: "2.5 km = ? m", a: 2500, hint: "2.5 x 1000." },
      { q: "Area of circle radius 4, pi=3 = ?", a: 48, hint: "A = pi x r^2 = 3 x 16." },
      { q: "Perimeter of triangle sides 3,4,5 = ?", a: 12, hint: "3 + 4 + 5." },
      { q: "Pythagorean: legs 5 and 12, hypotenuse = ?", a: 13, hint: "25 + 144 = 169." },
      { q: "Area of trapezoid bases 4,6 height 3 = ?", a: 15, hint: "(4+6)x3/2 = 30/2." },
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
      { q: "sin(90 degrees) = ?", a: 1, hint: "Sine peaks at 90 degrees." },
      { q: "cos(90 degrees) = ?", a: 0, hint: "Cosine crosses zero at 90 degrees." },
      { q: "180 degrees = ? radians (enter integer pi multiplier)", a: 0, hint: "pi radians = 180 degrees." },
      { q: "An acute angle is less than ? degrees", a: 90, hint: "Acute < 90 degrees." },
      { q: "An obtuse angle is greater than ? degrees", a: 90, hint: "Obtuse > 90 degrees." },
      { q: "sin(30) = ? (type 0.5)", a: 0.5, hint: "1/2." },
      { q: "cos(60) = ? (type 0.5)", a: 0.5, hint: "1/2." },
      { q: "tan(45) = ?", a: 1, hint: "sin(45)/cos(45) = 1." },
      { q: "sin(180) = ?", a: 0, hint: "Sine zero crossing." },
      { q: "cos(180) = ?", a: -1, hint: "Cosine minimum." },
      { q: "sin(45) approx? (type 0.71)", a: 0.71, hint: "sqrt(2)/2 approx 0.71." },
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
      { q: "log10(1000) = ?", a: 3, hint: "10^3 = 1000." },
      { q: "Sequence: 1, 4, 9, 16, ?", a: 25, hint: "Square numbers." },
      { q: "2^5 = ?", a: 32, hint: "2 x 2 x 2 x 2 x 2." },
      { q: "2^10 / 2^3 = 2^?", a: 7, hint: "Subtract exponents: 10-3." },
      { q: "(2^3)^2 = 2^?", a: 6, hint: "Multiply exponents: 3x2." },
      { q: "3^3 = ?", a: 27, hint: "3 x 3 x 3." },
      { q: "log2(32) = ?", a: 5, hint: "2^5 = 32." },
      { q: "2^0 = ?", a: 1, hint: "Anything to power 0 is 1." },
      { q: "Next: 1, 1, 2, 3, 5, 8, ?", a: 13, hint: "Fibonacci: add previous two." },
      { q: "10^3 / 10^1 = 10^?", a: 2, hint: "3 - 1 = 2." },
      { q: "Sum 1 to 10 = ?", a: 55, hint: "n(n+1)/2 with n=10." },
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
      { q: "Derivative of x^2 at x=3: 2*3 = ?", a: 6, hint: "d/dx x^2 = 2x." },
      { q: "Integral of 5 from 0 to 4 = ?", a: 20, hint: "Area of 5 x 4 rectangle." },
      { q: "A 50 Hz signal period in ms = ?", a: 20, hint: "1000/50." },
      { q: "Acceleration: speed goes 0 to 20 in 4s. Avg accel = ?", a: 5, hint: "(20-0)/4." },
      { q: "f(x) = 4x + 1, f(3) - f(1) = ?", a: 8, hint: "(13) - (5) = 8." },
      { q: "Derivative of 5x + 2 = ?", a: 5, hint: "Slope of linear function." },
      { q: "Rate: distance 100m in 10s = ? m/s", a: 10, hint: "100/10." },
      { q: "Integral of 3 from 0 to 5 = ?", a: 15, hint: "3 x 5 rectangle." },
      { q: "If f(x) = 2x, f(5) - f(3) = ?", a: 4, hint: "10 - 6 = 4." },
      { q: "Speed doubles from 10 to 20 in 2s. Accel = ?", a: 5, hint: "(20-10)/2." },
      { q: "Average of 6 readings: 10,12,14,16,18,20 = ?", a: 15, hint: "Sum 90 / 6." },
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
    { q: "What is the maximum value representable with 4 bits?", a: 15, hint: "1111 binary = 15." },
    { q: "How many bytes in 1 KB?", a: 1024, hint: "1 KB = 1024 bytes." },
    { q: "Convert decimal 7 to 3-bit binary (enter decimal).", a: 7, hint: "111 in binary." },
    { q: "ASCII stands for American Standard Code for Information ?", a: 0, hint: "Not a math question; skip if needed." },
    { q: "What is 0x10 in decimal?", a: 16, hint: "1*16 + 0." },
    { q: "Hex 0x1A in decimal = ?", a: 26, hint: "1x16 + 10." },
    { q: "Binary 1111 to hex? (enter decimal)", a: 15, hint: "0xF = 15." },
    { q: "How many bits in 4 bytes?", a: 32, hint: "4 x 8." },
    { q: "Unicode vs ASCII: which has more? (0=Unicode,1=ASCII)", a: 0, hint: "Unicode has far more characters." },
    { q: "What is 0b1000 in decimal?", a: 8, hint: "1x8." },
  ],
  week1: [
    { q: "In C, what is the integer result of 5 / 2?", a: 2, hint: "Integer division truncates the decimal part." },
    { q: "sizeof(char) in standard C returns what value?", a: 1, hint: "A char is always 1 byte." },
    { q: "How many bits are in a standard byte?", a: 8, hint: "A byte contains 8 bits." },
    { q: "If uint8_t x = 255 and we add 1, what is the result?", a: 0, hint: "Unsigned 8-bit overflow wraps around." },
    { q: "A program takes 3 command-line arguments including program name. argc = ?", a: 3, hint: "argc includes the program name itself." },
    { q: "What does 'int' typically store on 32-bit? (bytes)", a: 4, hint: "32 bits = 4 bytes." },
    { q: "What is 10 % 3 in C?", a: 1, hint: "Remainder of 10/3." },
    { q: "A while loop runs as long as condition is ? (1=true,0=false)", a: 1, hint: "Loop continues while true." },
    { q: "If int x = 7; x += 3; x = ?", a: 10, hint: "x = 7 + 3." },
    { q: "What is the value of 1/2 in C (integer division)?", a: 0, hint: "Integer division truncates." },
    { q: "int x = 3.9; x = ? (C truncation)", a: 3, hint: "Truncates toward zero." },
    { q: "sizeof(float) on 32-bit = ?", a: 4, hint: "float is 4 bytes." },
    { q: "int a = 5; a *= 2; a = ?", a: 10, hint: "a = 5 x 2." },
    { q: "int x = 7 / 3; x = ?", a: 2, hint: "Integer division." },
    { q: "char c = 'A'; printf('%c', c+1) prints? (0=B)", a: 0, hint: "B — enter 0." },
  ],
  week2: [
    { q: "What is the index of the first element in a C array?", a: 0, hint: "C arrays are zero-indexed." },
    { q: "How many bytes does the string 'hi' occupy including null terminator?", a: 3, hint: "h + i + null = 3 bytes." },
    { q: "If char s[] = 'abc', what is s[0]? (Enter ASCII code of 'a')", a: 97, hint: "ASCII 'a' has decimal value 97." },
    { q: "If argc is 5, how many arguments were passed (excluding program name)?", a: 4, hint: "argc minus 1." },
    { q: "A buffer of 10 chars holds at most how many visible characters (excluding null)?", a: 9, hint: "One slot is needed for the null terminator." },
    { q: "If int arr[5] = {10}; what is arr[1]?", a: 0, hint: "Uninitialized elements are zero." },
    { q: "strlen(\"hello\") returns ?", a: 5, hint: "Counts chars before null." },
    { q: "What is the ASCII code for newline?", a: 10, hint: "Line feed = 10." },
    { q: "If char s[] = \"ab\"; s[2] = ? (ASCII code)", a: 0, hint: "Null terminator." },
    { q: "What is 'a' - 'A' in ASCII? (difference)", a: 32, hint: "Lowercase - uppercase = 32." },
    { q: "int arr[3] = {1}; arr[2] = ?", a: 0, hint: "Uninitialized = 0." },
    { q: "char s[] = 'A'; s[1] = ? (ASCII)", a: 0, hint: "Null terminator." },
    { q: "strcmp('cat', 'dog') returns? (neg= -1)", a: -1, hint: "'cat' < 'dog' alphabetically." },
    { q: "int a[3][4]; total bytes on 32-bit = ?", a: 48, hint: "12 x 4." },
    { q: "argv[0] is always the? (1=program name,2=first arg)", a: 1, hint: "Program name." },
  ],
  week3: [
    { q: "Linear search worst-case comparisons for n = 1000 items = ?", a: 1000, hint: "You might check every single item." },
    { q: "What is log base 2 of 64?", a: 6, hint: "2 raised to what power equals 64?" },
    { q: "Binary search max comparisons for 256 sorted items = ?", a: 8, hint: "log2(256) = 8." },
    { q: "Factorial 5! = ?", a: 120, hint: "5 x 4 x 3 x 2 x 1." },
    { q: "What is log2(1024)?", a: 10, hint: "1024 = 2^10." },
    { q: "Bubble sort on n items: roughly how many comparisons? O(?) (enter n^2 coefficient)", a: 0, hint: "O(n^2) for bubble sort." },
    { q: "Selection sort on 100 items: how many passes?", a: 99, hint: "n-1 passes." },
    { q: "What big-O describes binary search?", a: 0, hint: "O(log n) — enter 0 for log n." },
    { q: "Merge sort time complexity: O(n log n). For n=8, approx operations? (n*log2(n))", a: 24, hint: "8 * 3." },
    { q: "Omega notation describes best-case or worst-case? (1=best,2=worst)", a: 1, hint: "Omega is best-case lower bound." },
    { q: "log2(16) = ?", a: 4, hint: "2^4 = 16." },
    { q: "Bubble sort n*(n-1)/2 for n=5: ?", a: 10, hint: "5 x 4 / 2." },
    { q: "Binary search only works on ? data (1=sorted,2=unsorted)", a: 1, hint: "Must be sorted." },
    { q: "O(n^2) worse than O(n log n)? (1=yes,0=no)", a: 1, hint: "Quadratic grows faster." },
    { q: "Merge sort divides array into ? halves", a: 2, hint: "Divide and conquer." },
  ],
  week4: [
    { q: "malloc(8) allocates how many bytes on the heap?", a: 8, hint: "malloc takes the number of bytes requested." },
    { q: "sizeof(int) on a typical 32-bit system is how many bytes?", a: 4, hint: "A standard int is 4 bytes (32 bits)." },
    { q: "A pointer on a 64-bit system is how many bytes?", a: 8, hint: "64-bit addresses need 8 bytes." },
    { q: "If int x = 42 and int* p = &x, what does *p equal?", a: 42, hint: "Dereferencing p gives the value of x." },
    { q: "How many bytes for an array of 10 ints (32-bit)?", a: 40, hint: "10 x 4 bytes." },
    { q: "What does free() do? (1=deallocates,2=allocates)", a: 1, hint: "Frees heap memory." },
    { q: "What is a NULL pointer value? (enter numeric)", a: 0, hint: "NULL is 0." },
    { q: "If malloc fails, what does it return?", a: 0, hint: "NULL (0)." },
    { q: "sizeof(struct { int x; char c; }) on 32-bit? (packed, no padding)", a: 5, hint: "4 + 1." },
    { q: "What function deallocates heap memory?", a: 0, hint: "free() — enter 0." },
    { q: "int* p = NULL; *p causes? (1=segfault,2=normal)", a: 1, hint: "Dereferencing NULL crashes." },
    { q: "void* can point to ? type (1=any,2=no)", a: 1, hint: "void* is generic." },
    { q: "calloc(5, 4) allocates how many bytes?", a: 20, hint: "5 x 4." },
    { q: "int arr[10]; arr points to ? element", a: 0, hint: "The first element." },
    { q: "free() can only free ? memory (1=heap,2=stack)", a: 1, hint: "Heap memory from malloc." },
  ],
  week5: [
    { q: "A queue enqueues 1, 2, 3. First dequeue returns ?", a: 1, hint: "Queue is FIFO: first in, first out." },
    { q: "A stack pushes 1 then 2. Pop returns ?", a: 2, hint: "Stack is LIFO: last in, first out." },
    { q: "Hash table of 10 slots, hash(key) = key % 10. Where does key 23 go?", a: 3, hint: "23 % 10." },
    { q: "Singly linked list node has how many pointer fields?", a: 1, hint: "It points to the next node." },
    { q: "How many children can a binary tree node have at most?", a: 2, hint: "Binary means at most two children." },
    { q: "What data structure is LIFO?", a: 0, hint: "Stack — enter 0." },
    { q: "What data structure is FIFO?", a: 0, hint: "Queue — enter 0." },
    { q: "Hash table with 10 slots, key=33 goes to slot?", a: 3, hint: "33 % 10." },
    { q: "A trie node for lowercase English has how many child pointers?", a: 26, hint: "One per letter." },
    { q: "Doubly linked list node has how many pointer fields?", a: 2, hint: "Prev and next." },
    { q: "Queue: enqueue 5, enqueue 3, dequeue, dequeue = ?", a: 3, hint: "First dequeue = 5, second = 3." },
    { q: "BST left child is ? than parent (1=less,2=greater)", a: 1, hint: "Left < parent." },
    { q: "Hash table load factor 2 means 2 items per ? (1=slot,2=byte)", a: 1, hint: "Per slot average." },
    { q: "Linked list insert at head is O(?) (1=O(1),2=O(n))", a: 1, hint: "Just update the head pointer." },
    { q: "Stack: push 1, push 2, peek = ?", a: 2, hint: "Peek shows top element." },
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
  const c = ((n * 5) % 9) + 1;
  const d = ((n * 7) % 11) + 1;
  switch (weekId) {
    case "week0":
      if (easy) {
        if (n % 12 === 0) return { id, q: `${a} + ${b} = ?`, a: a + b, hint: "Add the numbers." };
        if (n % 12 === 1) return { id, q: `What is ${a} in binary? (enter decimal value)`, a: a, hint: "The value stays the same." };
        if (n % 12 === 2) return { id, q: `How many bits in ${a} bytes?`, a: a * 8, hint: "1 byte = 8 bits." };
        if (n % 12 === 3) return { id, q: `What is ${a}0 in decimal?`, a: a * 10, hint: "Tens place." };
        if (n % 12 === 4) return { id, q: `How many values can ${a} bits represent?`, a: 2 ** a, hint: "n bits = 2^n values." };
        if (n % 12 === 5) return { id, q: `Binary 000${a % 2} to decimal?`, a: a % 2, hint: "0 or 1." };
        if (n % 12 === 6) return { id, q: `How many bits to store numbers 0-${(2 ** a) - 1}?`, a: a, hint: `2^${a} = ${2 ** a}.` };
        if (n % 12 === 7) return { id, q: `ASCII 'A' is 65. ASCII 'B' = ?`, a: 66, hint: "Consecutive letters." };
        if (n % 12 === 8) return { id, q: `Binary 00${b % 2}${a % 2} to decimal = ?`, a: (b % 2) * 2 + (a % 2), hint: "2-bit binary to decimal." };
        if (n % 12 === 9) return { id, q: `How many bits to represent 1 ASCII char?`, a: 8, hint: "7-8 bits per character." };
        if (n % 12 === 10) return { id, q: `What is the hex digit value of 0xA?`, a: 10, hint: "A in hex = 10 decimal." };
        return { id, q: `How many bytes in ${a * 2} bits?`, a: a * 2 / 8, hint: "Divide bits by 8." };
      }
      if (n % 12 === 0) return { id, q: `What is the decimal value of hex 0x${a}${b}?`, a: a * 16 + b, hint: "Hex digits: first x16 + second." };
      if (n % 12 === 1) return { id, q: `A loop runs ${a * 3} times, counter starts at 0, increments by 1. Final counter?`, a: a * 3, hint: "Starting at 0, increment each iteration." };
      if (n % 12 === 2) return { id, q: `Convert binary ${a}${b}${(a + b) % 2}${b % 2} to decimal.`, a: a * 8 + b * 4 + ((a + b) % 2) * 2 + (b % 2), hint: "Multiply each bit by its place value." };
      if (n % 12 === 3) return { id, q: `${a} MB = ? bytes (in millions)`, a: a, hint: "MB means million bytes." };
      if (n % 12 === 4) return { id, q: `Hex 0xFF in decimal = ?`, a: 255, hint: "15*16 + 15." };
      if (n % 12 === 5) return { id, q: `How many KB in ${a} MB?`, a: a * 1024, hint: "1 MB = 1024 KB." };
      if (n % 12 === 6) return { id, q: `RGB color: red=255, green=0, blue=0. Decimal value of red byte?`, a: 255, hint: "Red channel is 255." };
      if (n % 12 === 7) return { id, q: `A ${a}-bit system can address up to 2^${a} = ? bytes (enter power of 2)`, a: 2 ** a, hint: `2^${a}.` };
      if (n % 12 === 8) return { id, q: `Hex subtraction: 0x${a}${b} - 0x${a}0 = ? (decimal)`, a: b, hint: "Only the low nibble changes." };
      if (n % 12 === 9) return { id, q: `uint8 overflow: 255 + ${a} = ?`, a: a - 1, hint: "uint8 wraps past 255 to 0." };
      if (n % 12 === 10) return { id, q: `Binary addition: 0b101 + 0b${b%2}${a%2}${(a+b)%2} = ? (enter decimal)`, a: 5 + (b % 2) * 4 + (a % 2) * 2 + ((a + b) % 2), hint: "Add binary values in decimal." };
      return { id, q: `A nibble (4 bits) max unsigned decimal value = ?`, a: 15, hint: "1111 = 15." };
    case "week1":
      if (easy) {
        if (n % 12 === 0) return { id, q: `${a} x ${b} = ?`, a: a * b, hint: "Multiply." };
        if (n % 12 === 1) return { id, q: `5 / 2 integer division = ?`, a: 2, hint: "Integer division truncates." };
        if (n % 12 === 2) return { id, q: `${a} + ${b} = ?`, a: a + b, hint: "Add them." };
        if (n % 12 === 3) return { id, q: `char uses how many bytes?`, a: 1, hint: "1 byte." };
        if (n % 12 === 4) return { id, q: `${a} % ${b} = ?`, a: a % b, hint: "Remainder after division." };
        if (n % 12 === 5) return { id, q: `int uses how many bytes on 32-bit?`, a: 4, hint: "32 bits = 4 bytes." };
        if (n % 12 === 6) return { id, q: `${a} == ${b} in C? (1=true,0=false)`, a: a === b ? 1 : 0, hint: "Equality check." };
        if (n % 12 === 7) return { id, q: `float usually uses how many bytes?`, a: 4, hint: "Same as int." };
        if (n % 12 === 8) return { id, q: `sizeof(char) = ?`, a: 1, hint: "char is 1 byte." };
        if (n % 12 === 9) return { id, q: `int a = ${a}; a += ${b}; a = ?`, a: a + b, hint: `${a} + ${b}.` };
        if (n % 12 === 10) return { id, q: `Is 20 % 4 == 0? (1=true,0=false)`, a: 1, hint: "20 is divisible by 4." };
        return { id, q: `C: result of ${a} < ${b} (1=yes,0=no)`, a: a < b ? 1 : 0, hint: "Less than comparison." };
      }
      if (n % 12 === 0) return { id, q: `int x = ${a} / ${b}; In C, x = ?`, a: Math.floor(a / b), hint: "Integer division truncates." };
      if (n % 12 === 1) return { id, q: `int arr[${a}]; sizeof(arr) on 32-bit = ?`, a: a * 4, hint: "int is 4 bytes on 32-bit." };
      if (n % 12 === 2) return { id, q: `uint8_t x = ${250 + a}; x += ${b}; x = ?`, a: (250 + a + b) % 256, hint: "uint8 wraps at 256." };
      if (n % 12 === 3) return { id, q: `argc is ${a + 3}. How many user arguments (excluding program name)?`, a: a + 2, hint: "argc minus 1." };
      if (n % 12 === 4) return { id, q: `long long on most systems is how many bytes?`, a: 8, hint: "64-bit = 8 bytes." };
      if (n % 12 === 5) return { id, q: `for(int i=0;i<${a};i++) loops how many times?`, a: a, hint: "0 to a-1." };
      if (n % 12 === 6) return { id, q: `if (${a} > ${b}) true? (1=yes,0=no)`, a: a > b ? 1 : 0, hint: "Compare the two numbers." };
      if (n % 12 === 7) return { id, q: `double on most systems is how many bytes?`, a: 8, hint: "64-bit." };
      if (n % 12 === 8) return { id, q: `int x = (${a} + ${b}) * ${c}; x = ?`, a: (a + b) * c, hint: "Parentheses first, then multiply." };
      if (n % 12 === 9) return { id, q: `short on most systems is how many bytes?`, a: 2, hint: "Short is at least 2 bytes." };
      if (n % 12 === 10) return { id, q: `uint16_t x = 65535; x++; x = ?`, a: 0, hint: "uint16 wraps at 65536." };
      return { id, q: `int8_t x = 127; x++; x = ?`, a: -128, hint: "Signed overflow wraps to negative." };
    case "week2":
      if (easy) {
        if (n % 12 === 0) return { id, q: `First index of an array is?`, a: 0, hint: "Arrays start at 0." };
        if (n % 12 === 1) return { id, q: `A string 'ab' has how many chars (including null)?`, a: 3, hint: "a + b + null." };
        if (n % 12 === 2) return { id, q: `char s[] = "a"; s[0] ASCII = ?`, a: 97, hint: "ASCII 'a' is 97." };
        if (n % 12 === 3) return { id, q: `An array of ${a} ints uses ${a * 4} bytes (32-bit). True? 1=yes, 0=no`, a: 1, hint: `${a} x 4 = ${a * 4}.` };
        if (n % 12 === 4) return { id, q: `int arr[${a}]; last index = ?`, a: a - 1, hint: "0-indexed." };
        if (n % 12 === 5) return { id, q: `char s[] = "hi"; s[2] (null char) ASCII = ?`, a: 0, hint: "Null terminator is 0." };
        if (n % 12 === 6) return { id, q: `What is strlen("")?`, a: 0, hint: "Empty string length 0." };
        if (n % 12 === 7) return { id, q: `ASCII '0' is 48. ASCII '1' = ?`, a: 49, hint: "Consecutive digits." };
        if (n % 12 === 8) return { id, q: `ASCII 'Z' is 90, '[' is?`, a: 91, hint: "Consecutive characters." };
        if (n % 12 === 9) return { id, q: `char s[] = "ab"; strlen(s) = ?`, a: 2, hint: "Length without null." };
        if (n % 12 === 10) return { id, q: `int arr[${a}]; arr[0] is valid? (1=yes,0=no)`, a: 1, hint: "Index 0 is always valid." };
        return { id, q: `ASCII 'a' - 'A' = ?`, a: 32, hint: "Lowercase - uppercase." };
      }
      if (n % 12 === 0) return { id, q: `int arr[${a}] = {${b}}; arr[0] = ?`, a: b, hint: `First element is ${b}.` };
      if (n % 12 === 1) return { id, q: `char s[] = "hello"; strlen(s) = ?`, a: 5, hint: "strlen counts chars before null." };
      if (n % 12 === 2) return { id, q: `argc=${a + 2}. argv[0] is program name. argv[${a}] is the ?th argument`, a: a + 1, hint: "Index equals argument position." };
      if (n % 12 === 3) return { id, q: `Buffer ${a * 2} bytes. Max visible chars (excl null)?`, a: a * 2 - 1, hint: "One byte reserved for null." };
      if (n % 12 === 4) return { id, q: `char s[${a}] = "abc"; s[${a - 1}] = ? (ASCII)`, a: 0, hint: "Last slot is null." };
      if (n % 12 === 5) return { id, q: `int a[2][3]; total elements?`, a: 6, hint: "2 x 3." };
      if (n % 12 === 6) return { id, q: `char* s = "cs50"; s[0] = ? (ASCII)`, a: 99, hint: "ASCII 'c'." };
      if (n % 12 === 7) return { id, q: `int arr[${a}] = {${b}}; arr[${a - 1}]=? (default value)`, a: 0, hint: "Uninitialized elements are 0." };
      if (n % 12 === 8) return { id, q: `char s[] = "Hello"; toupper('H') gives ASCII?`, a: 72, hint: "toupper preserves uppercase. ASCII 'H' = 72." };
      if (n % 12 === 9) return { id, q: `int mat[${a}][${b}]; total bytes on 32-bit = ?`, a: a * b * 4, hint: `${a} x ${b} x 4.` };
      if (n % 12 === 10) return { id, q: `strcmp("a", "b") returns <0, 0, or >0?`, a: -1, hint: "Negative when first is less." };
      return { id, q: `char s[] = "hi\\0there"; strlen(s) = ?`, a: 2, hint: "strlen stops at the first null." };
    case "week3":
      if (easy) {
        if (n % 12 === 0) return { id, q: `Sorted list of ${a * 10} items, linear search worst-case = ?`, a: a * 10, hint: "Could check every item." };
        if (n % 12 === 1) return { id, q: `What is 2^${a}?`, a: 2 ** a, hint: `2 raised to ${a}.` };
        if (n % 12 === 2) return { id, q: `${a}! = ${a} x ${a - 1} x ... x 1. ${a}! = ?`, a: a <= 3 ? 6 : 120, hint: "Multiply from 1 to a." };
        if (n % 12 === 3) return { id, q: `Is 2^3 = 8? (1=yes, 0=no)`, a: 1, hint: "2x2x2 = 8." };
        if (n % 12 === 4) return { id, q: `Bubble sort on ${a * 3} items: roughly how many passes?`, a: a * 3, hint: "n-1 passes." };
        if (n % 12 === 5) return { id, q: `Selection sort finds min how many times for ${a * 5} items?`, a: a * 5, hint: "One per pass." };
        if (n % 12 === 6) return { id, q: `O(n) means operations grow ? with n (1=linear,2=quadratic)`, a: 1, hint: "O(n) is linear." };
        if (n % 12 === 7) return { id, q: `Can binary search work on unsorted data? (1=yes,0=no)`, a: 0, hint: "Must be sorted." };
        if (n % 12 === 8) return { id, q: `Insertion sort: how many items in sorted section after 1 pass?`, a: 1, hint: "First element is the initial sorted section." };
        if (n % 12 === 9) return { id, q: `O(1) means ? time (1=constant,2=linear)`, a: 1, hint: "O(1) is constant time." };
        if (n % 12 === 10) return { id, q: `Is 5! = 120? (1=yes,0=no)`, a: 1, hint: "5x4x3x2x1 = 120." };
        return { id, q: `Recursive factorial(5) calls factorial() how many times (including initial)?`, a: 5, hint: "fact(5) calls fact(4) calls fact(3) ... = 5 calls." };
      }
      if (n % 12 === 0) return { id, q: `Binary search max comparisons for ${2 ** (a + 3)} items = ?`, a: a + 3, hint: "log2(n)." };
      if (n % 12 === 1) return { id, q: `Merge sort ${a * 2} items. Comparisons? O(nlogn). log2(${a * 2}) rounded = ?`, a: Math.ceil(Math.log2(a * 2)), hint: "n log n." };
      if (n % 12 === 2) return { id, q: `Omega(1) means constant? (1=yes,0=no)`, a: 1, hint: "Omega(1) is constant lower bound." };
      if (n % 12 === 3) return { id, q: `Theta(n) for ${a * 10} items gives about how many operations?`, a: a * 10, hint: "Theta(n) = proportional to n." };
      if (n % 12 === 4) return { id, q: `O(n^2) for n=${a * 5}: roughly how many operations?`, a: (a * 5) ** 2, hint: `(${a * 5})^2.` };
      if (n % 12 === 5) return { id, q: `Binary search on 1M items needs ~how many steps? (2^20=1M)`, a: 20, hint: "log2(1M) ~ 20." };
      if (n % 12 === 6) return { id, q: `Merge sort space complexity: O(?) (1=O(1),2=O(n),3=O(n^2))`, a: 2, hint: "Needs temp array." };
      if (n % 12 === 7) return { id, q: `Linear search on ${a * 100} items, avg comparisons = ?`, a: a * 50, hint: "n/2 on average." };
      if (n % 12 === 8) return { id, q: `Counting sort on ${a} unique values: range k = ${a}. O(n+k) = O(n+${a}) = O(?)(1=n,2=n+a)`, a: 2, hint: `O(n+k) = O(n+${a}).` };
      if (n % 12 === 9) return { id, q: `Recursion depth: fib(${a}) calls fib(${a - 1})+fib(${a - 2}). Depth approximately?`, a: a, hint: "Recursive depth roughly equals n." };
      if (n % 12 === 10) return { id, q: `Omega(n) means best-case at least linear? (1=yes,0=no)`, a: 1, hint: "Omega gives lower bound." };
      return { id, q: `O(n^3) for n=${a}: roughly how many operations?`, a: a ** 3, hint: `${a}^3.` };
    case "week4":
      if (easy) {
        if (n % 12 === 0) return { id, q: `malloc(${a * 4}) allocates how many bytes?`, a: a * 4, hint: "malloc returns requested bytes." };
        if (n % 12 === 1) return { id, q: `sizeof(int) on 32-bit = ? bytes`, a: 4, hint: "int is 4 bytes." };
        if (n % 12 === 2) return { id, q: `A pointer stores a memory ? (1=address,0=value)`, a: 1, hint: "Pointer stores address." };
        if (n % 12 === 3) return { id, q: `int ${a} ints in array x ${b} bytes each = total?`, a: a * b, hint: "Multiply." };
        if (n % 12 === 4) return { id, q: `free() deallocates memory. What does it take? (1=pointer,2=value)`, a: 1, hint: "Takes the pointer." };
        if (n % 12 === 5) return { id, q: `Stack stores local vars. Heap for ? (1=dynamic,2=static)`, a: 1, hint: "malloc allocates on heap." };
        if (n % 12 === 6) return { id, q: `sizeof(char*) on 64-bit = ?`, a: 8, hint: "Pointer is 8 bytes on 64-bit." };
        if (n % 12 === 7) return { id, q: `int* p; p stores an ? (1=address,2=integer)`, a: 1, hint: "Pointers hold addresses." };
        if (n % 12 === 8) return { id, q: `malloc returns NULL when ? (1=fail,2=success)`, a: 1, hint: "NULL indicates allocation failure." };
        if (n % 12 === 9) return { id, q: `sizeof(char) = ${a} byte(s)? (1=yes,0=no)`, a: 1, hint: "char is always 1 byte." };
        if (n % 12 === 10) return { id, q: `int *p; p+${a} advances by how many bytes (32-bit)?`, a: a * 4, hint: "Each int is 4 bytes." };
        return { id, q: `& operator gets ? of a variable (1=address,2=value)`, a: 1, hint: "& returns the address." };
      }
      if (n % 12 === 0) return { id, q: `int* p = malloc(${a * 10}); if !p, the return value is? (address)`, a: 0, hint: "NULL = 0." };
      if (n % 12 === 1) return { id, q: `int x = ${a}; int* p = &x; *p = ${b}; x = ?`, a: b, hint: "Dereference changes x." };
      if (n % 12 === 2) return { id, q: `char buf[${a}]; gets(buf) risk: how many bytes overflow if input is ${a + 5} chars?`, a: 5, hint: "Extra bytes beyond buffer." };
      if (n % 12 === 3) return { id, q: `sizeof(double) on most systems = ?`, a: 8, hint: "double is 8 bytes." };
      if (n % 12 === 4) return { id, q: `int *p = malloc(${a * 4}); free(p); p is now ? (1=dangling,2=valid)`, a: 1, hint: "Dangling pointer." };
      if (n % 12 === 5) return { id, q: `int* p = malloc(4); p[0] = ${a}; *(p+0) = ?`, a: a, hint: "p[0] is same as *(p+0)." };
      if (n % 12 === 6) return { id, q: `Stack overflow from infinite recursion (1=yes,0=no)`, a: 1, hint: "Stack has limited size." };
      if (n % 12 === 7) return { id, q: `int a = ${a}; int* p = &a; sizeof(p) on 32-bit = ?`, a: 4, hint: "Pointer is 4 bytes on 32-bit." };
      if (n % 12 === 8) return { id, q: `int* p = malloc(${a} * sizeof(int)); total bytes on 32-bit?`, a: a * 4, hint: `${a} x 4.` };
      if (n % 12 === 9) return { id, q: `realloc(p, ${a * 8}) changes size to how many bytes?`, a: a * 8, hint: "New size as requested." };
      if (n % 12 === 10) return { id, q: `struct { int x; } s; sizeof(s) on 32-bit = ?`, a: 4, hint: "One int field = 4 bytes." };
      return { id, q: `Memory leak: malloc without ? causes leak (1=free,2=realloc)`, a: 1, hint: "Must free allocated memory." };
    case "week5":
      if (easy) {
        if (n % 12 === 0) return { id, q: `Queue: enqueue 1, enqueue 2, dequeue = ?`, a: 1, hint: "FIFO: first in, first out." };
        if (n % 12 === 1) return { id, q: `Stack: push 1, push 2, pop = ?`, a: 2, hint: "LIFO: last in, first out." };
        if (n % 12 === 2) return { id, q: `Hash: key % ${a} maps key ${a * 2} to slot?`, a: 0, hint: `${a * 2} % ${a} = 0.` };
        if (n % 12 === 3) return { id, q: `Binary tree node max children = ?`, a: 2, hint: "Binary = at most 2." };
        if (n % 12 === 4) return { id, q: `Linked list node contains data and ? (1=pointer,2=index)`, a: 1, hint: "Points to next node." };
        if (n % 12 === 5) return { id, q: `Array vs linked list: which has faster index access? (1=array,2=list)`, a: 1, hint: "O(1) vs O(n)." };
        if (n % 12 === 6) return { id, q: `Hash table load factor = items / ? (1=slots,2=bytes)`, a: 1, hint: "Items per slot." };
        if (n % 12 === 7) return { id, q: `Trie node children per English letter?`, a: 26, hint: "One per letter." };
        if (n % 12 === 8) return { id, q: `Doubly linked list prev pointer of head = ? (1=NULL,2=tail)`, a: 1, hint: "Head has no previous." };
        if (n % 12 === 9) return { id, q: `Stack: push 5, pop, push 3, peek = ?`, a: 3, hint: "Peek sees top without removing." };
        if (n % 12 === 10) return { id, q: `Graph edge connects ? nodes (1=two,2=one)`, a: 1, hint: "An edge connects two nodes." };
        return { id, q: `Circular queue prevents ? (1=overflow,2=null)`, a: 1, hint: "Wraps around to use empty slots." };
      }
      if (n % 12 === 0) return { id, q: `Hash table ${a} slots. Key ${a * a + b} goes to slot?`, a: (a * a + b) % a, hint: "key % slots." };
      if (n % 12 === 1) return { id, q: `Singly linked list traversal from head to tail is O(?)`, a: a <= 3 ? 3 : 4, hint: "1=O(1),2=O(log n),3=O(n),4=O(n^2)" };
      if (n % 12 === 2) return { id, q: `BST with ${a * 4} nodes, search worst-case with no rebalancing = O(?)`, a: a * 4, hint: "Unbalanced can be O(n)." };
      if (n % 12 === 3) return { id, q: `Trie storing ${a} words of avg length ${b} has roughly how many nodes?`, a: a * b, hint: "words x avg length." };
      if (n % 12 === 4) return { id, q: `Queue using array: enqueue O(?), dequeue O(?) (1=O(1),2=O(n))`, a: 12, hint: "Enqueue O(1), dequeue O(n) without ring." };
      if (n % 12 === 5) return { id, q: `Stack push/pop time complexity (1=O(1),2=O(n))`, a: 1, hint: "Both constant time." };
      if (n % 12 === 6) return { id, q: `Hash table with chaining: worst-case search O(?) (1=O(n),2=O(1))`, a: 1, hint: "All could collide." };
      if (n % 12 === 7) return { id, q: `AVL tree guarantees O(log n) search (1=yes,0=no)`, a: 1, hint: "Self-balancing." };
      if (n % 12 === 8) return { id, q: `Graph with ${a} nodes fully connected: max edges = ?`, a: (a * (a - 1)) / 2, hint: "n(n-1)/2." };
      if (n % 12 === 9) return { id, q: `BST inorder traversal visits nodes in ? order (1=sorted,2=random)`, a: 1, hint: "Left-root-right gives sorted order." };
      if (n % 12 === 10) return { id, q: `Hash table resizing when load factor > ? (typical: 0.75 means enter 75)`, a: 75, hint: "75 means 0.75 load factor." };
      return { id, q: `Doubly linked list: insert after head is O(?) (1=O(1),2=O(n))`, a: 1, hint: "Head pointer available." };
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
  const d = ((n * 7) % 15) + 1;
  const source = easy ? "Easy course-aligned original" : advanced ? "Advanced course-aligned original" : "Intermediate course-aligned original";
  const item = (q, answer, hint) => ({ id, topic, level, q, a: answer, hint, source });

  if (easy) {
    switch (topic) {
      case "Number Systems":
        if (n % 8 === 0) return item(`What is ${a} + ${b} in decimal?`, a + b, "Add the numbers.");
        if (n % 8 === 1) return item(`What is ${a} x ${b}?`, a * b, "Multiply the numbers.");
        if (n % 8 === 2) return item(`How many bits in ${a} bytes?`, a * 8, "1 byte = 8 bits.");
        if (n % 8 === 3) return item(`What is ${b}0 in decimal?`, b * 10, "Tens place value.");
        if (n % 8 === 4) return item(`What is 0x${a} in decimal? (hex digit)`, a, "Single hex digit equals same decimal for 0-9.");
        if (n % 8 === 5) return item(`How many bytes in ${b} KB?`, b * 1024, "1 KB = 1024 bytes.");
        if (n % 8 === 6) return item(`Binary 0b${a%2}${b%2}${c%2} to decimal?`, (a%2)*4 + (b%2)*2 + (c%2), "Multiply each bit by 4,2,1.");
        return item(`What is ${a}0 + ${b} in decimal?`, a * 10 + b, "Combine tens and ones.");
      case "Bit Manipulation":
        if (n % 8 === 0) return item(`${a} AND ${b}: bitwise if both are 1, result = (1 if ${a}>0 && ${b}>0 else 0)?`, (a > 0 && b > 0) ? 1 : 0, "AND requires both true.");
        if (n % 8 === 1) return item(`${a} OR ${b}: bitwise if either is 1, result = (1 if ${a}>0 || ${b}>0 else 0)?`, (a > 0 || b > 0) ? 1 : 0, "OR true if either is true.");
        if (n % 8 === 2) return item(`NOT ${a % 2} (use 1=true,0=false)?`, a % 2 ? 0 : 1, "NOT flips the bit.");
        if (n % 8 === 3) return item(`${a % 2} XOR ${(a + 1) % 2} (use 1=true,0=false)?`, 1, "XOR is true when bits differ.");
        if (n % 8 === 4) return item(`1 << ${a % 4} = ?`, 2 ** (a % 4), "Left shift by n multiplies by 2^n.");
        if (n % 8 === 5) return item(`4 >> ${a % 3} = ? (integer division)`, Math.floor(4 / (2 ** (a % 3))), "Right shift divides by 2^n.");
        if (n % 8 === 6) return item(`${a % 2} NAND ${(a + 1) % 2} = ? (1=true,0=false)`, 1, "NAND is NOT(AND). Both 1 -> NAND 0.");
        return item(`${a % 2} NOR ${(a + 1) % 2} = ? (1=true,0=false)`, 0, "NOR is NOT(OR). One 1 -> OR 1 -> NOR 0.");
      case "Algebra":
        if (n % 8 === 0) return item(`If x + ${a} = ${a + b}, x = ?`, b, `Subtract ${a} from both sides.`);
        if (n % 8 === 1) return item(`If ${a} * x = ${a * b}, x = ?`, b, `Divide both sides by ${a}.`);
        if (n % 8 === 2) return item(`1 MHz = ? Hz`, 1000000, "MHz means million hertz.");
        if (n % 8 === 3) return item(`If x - ${a} = ${b}, x = ?`, a + b, `Add ${a} to both sides.`);
        if (n % 8 === 4) return item(`${a} kHz = ? Hz`, a * 1000, "kHz means thousand hertz.");
        if (n % 8 === 5) return item(`If x/${a} = ${b}, x = ?`, a * b, `Multiply both sides by ${a}.`);
        if (n % 8 === 6) return item(`y = ${a}x, if x = ${b}, y = ?`, a * b, `Substitute ${b} for x.`);
        return item(`${a} ns = ? microseconds`, a / 1000, "Divide nanoseconds by 1000.");
      case "Boolean Logic":
        if (n % 8 === 0) return item(`TRUE AND TRUE = ? (1=true,0=false)`, 1, "Both true = AND is true.");
        if (n % 8 === 1) return item(`FALSE OR TRUE = ? (1=true,0=false)`, 1, "One true = OR is true.");
        if (n % 8 === 2) return item(`TRUE AND FALSE = ? (1=true,0=false)`, 0, "Both must be true for AND.");
        if (n % 8 === 3) return item(`TRUE OR FALSE = ? (1=true,0=false)`, 1, "One true is enough for OR.");
        if (n % 8 === 4) return item(`NOT(FALSE) = ? (1=true,0=false)`, 1, "NOT flips false to true.");
        if (n % 8 === 5) return item(`FALSE XOR FALSE = ? (1=true,0=false)`, 0, "XOR is false when both same.");
        if (n % 8 === 6) return item(`TRUE XOR FALSE = ? (1=true,0=false)`, 1, "XOR is true when inputs differ.");
        return item(`NOT(TRUE AND FALSE) = ? (1=true,0=false)`, 1, "TRUE AND FALSE = FALSE, NOT(FALSE) = TRUE.");
      case "Fixed-Point":
        if (n % 8 === 0) return item(`Store ${a}.${b} as integer scaled by 10. Answer = ?`, a * 10 + b, "Move decimal one place right.");
        if (n % 8 === 1) return item(`5 / 2 = ? (integer division)`, 2, "Integer division discards remainder.");
        if (n % 8 === 2) return item(`${a} x 10 = ?`, a * 10, "Multiply by 10.");
        if (n % 8 === 3) return item(`Scale ${a * 10} back by dividing by 10. Answer = ?`, a, "Divide by 10.");
        if (n % 8 === 4) return item(`Represent ${a}.${b} with scale 100. Integer = ?`, a * 100 + b * 10, "Two decimal places: multiply by 100.");
        if (n % 8 === 5) return item(`Q4.4: 1 in Q4.4 notation = ?`, 16, "Q4.4 scale is 2^4 = 16.");
        if (n % 8 === 6) return item(`Scale factor 1000 applied to ${a}.${b} gives?`, a * 1000 + b * 100, "Move three decimal places.");
        return item(`Integer ${a * 100} / 100 in decimal = ?`, a, "Divide by 100 to get original.");
      case "Modular Arithmetic":
        if (n % 8 === 0) return item(`${a * 2} % ${a} = ?`, 0, "Even multiple yields remainder 0.");
        if (n % 8 === 1) return item(`${a * 5 + b} % ${a} = ?`, b, "Remove the multiples of a.");
        if (n % 8 === 2) return item(`5 + 1 % 3 = ? (add left to right)`, 0, "6 mod 3 = 0.");
        if (n % 8 === 3) return item(`${a + b} % ${a} = ?`, b, `${a + b} = ${a} x 1 + ${b}.`);
        if (n % 8 === 4) return item(`${a * b} % ${a} = ?`, 0, "${a} divides evenly into ${a*b}.");
        if (n % 8 === 5) return item(`${a * (b + 1)} % ${a} = ?`, 0, "Multiple of a has remainder 0.");
        if (n % 8 === 6) return item(`12 % ${a} = ? (remainder of 12 / ${a})`, 12 % a, "12 divided by a, remainder.");
        return item(`Even numbers mod 2 always = ?`, 0, "Even numbers are divisible by 2.");
      case "Calculus Concepts":
        if (n % 8 === 0) return item(`Value ${a} to ${a + b} change = ?`, b, "Subtract starting from ending.");
        if (n % 8 === 1) return item(`A ${a * 10} Hz wave period in ms = ?`, Math.round(1000 / (a * 10)), "Period = 1000/f ms.");
        if (n % 8 === 2) return item(`Area of ${a} x ${b} rectangle = ?`, a * b, "Area = width x height.");
        if (n % 8 === 3) return item(`Rate: ${a * 5} units / ${a} seconds = ?`, 5, "Divide units by time.");
        if (n % 8 === 4) return item(`Derivative: constant ${a} has slope ?`, 0, "Constants have zero slope.");
        if (n % 8 === 5) return item(`If f(x)=${a}x, f(2) + f(3) = ?`, a * 5, `f(2)=${2*a}, f(3)=${3*a}.`);
        if (n % 8 === 6) return item(`A sine wave has frequency ${a} Hz. Period in ms = ?`, Math.round(1000 / a), "T = 1/f.");
        return item(`Exponential growth: value ${a} doubles 3 times = ?`, a * 8, "x2 three times = x8.");
      case "Trigonometry & Signals":
        if (n % 8 === 0) return item(`A full circle has how many degrees?`, 360, "360 degrees in a circle.");
        if (n % 8 === 1) return item(`A right angle is how many degrees?`, 90, "Right angle = 90 degrees.");
        if (n % 8 === 2) return item(`${a * 5} Hz period in ms = ?`, Math.round(1000 / (a * 5)), "T = 1000/f.");
        if (n % 8 === 3) return item(`Amplitude ${a}V peak gives peak-to-peak = ?`, a * 2, "Peak-to-peak = 2 x amplitude.");
        if (n % 8 === 4) return item(`sin(0) + cos(0) = ?`, 1, "sin(0)=0, cos(0)=1.");
        if (n % 8 === 5) return item(`Phase shift of full 360 degrees = ? cycle(s)`, 1, "360 degress = one full cycle.");
        if (n % 8 === 6) return item(`DC offset: signal oscillates between ${a} and ${a + 2}. Offset = ?`, a + 1, "Offset = (min + max) / 2.");
        return item(`${a * 10} degrees = ? right angles`, a / 9, "Right angle = 90 degrees.");
      case "Statistics & Probability":
        if (n % 8 === 0) return item(`Mean of [${a}, ${a + b}, ${a + 2 * b}] = ?`, a + b, "Middle of evenly spaced values.");
        if (n % 8 === 1) return item(`${a * 10} out of 100 as percent?`, a * 10, "Percent = part/whole x 100.");
        if (n % 8 === 2) return item(`Probability of heads on fair coin (percent)?`, 50, "1 out of 2 sides.");
        if (n % 8 === 3) return item(`Range of [${a}, ${a + b}] = ?`, b, "Max minus min.");
        if (n % 8 === 4) return item(`Median of [${a}, ${a + 2}, ${a + b}] (odd count) = ?`, a + 2, "Middle value when sorted.");
        if (n % 8 === 5) return item(`Mode of [${a}, ${a}, ${a + b}] = ?`, a, "Most frequent value.");
        if (n % 8 === 6) return item(`Probability of rolling 6 on fair die (percent)?`, 17, "1/6 ≈ 17%.");
        return item(`If 3 of ${a * 10} samples are defective, defect rate percent = ?`, 30 / a, "defects / total x 100.");
      case "Linear Algebra":
        if (n % 8 === 0) return item(`A vector has ${a + 2} elements. Its length is?`, a + 2, "Count the elements.");
        if (n % 8 === 1) return item(`A 3-axis sensor gives a vector of length?`, 3, "x, y, z.");
        if (n % 8 === 2) return item(`Add [${a}, ${b}] + [${c}, ${a}] first element = ?`, a + c, "Add first elements.");
        if (n % 8 === 3) return item(`${a} x ${b} matrix has how many elements?`, a * b, "Rows x columns.");
        if (n % 8 === 4) return item(`Scalar multiply [${a},${b}] x ${c} = first element?`, a * c, "Multiply first element by scalar.");
        if (n % 8 === 5) return item(`Dot product [1,0] dot [${a},${b}] = ?`, a, "1 x a + 0 x b = a.");
        if (n % 8 === 6) return item(`Identity matrix I${a} has how many 1's?`, a, "Identity has 1's on diagonal.");
        return item(`Transpose of [${a}, ${b}] (row vector) has how many rows?`, 1, "Transpose swaps rows and columns.");
      case "DSP & Feature Extraction":
        if (n % 8 === 0) return item(`Mean of [${a}, ${b}, ${c}] rounded down = ?`, Math.floor((a + b + c) / 3), "Sum divided by count.");
        if (n % 8 === 1) return item(`100 ms at ${a * 10} Hz has how many samples?`, Math.round(0.1 * a * 10), "Samples = seconds x Hz.");
        if (n % 8 === 2) return item(`Nyquist says sample ${a} kHz signal at least ? Hz`, a * 2000, "At least 2x frequency.");
        if (n % 8 === 3) return item(`A ${a * 100} Hz sample rate captures up to ? Hz`, a * 50, "Nyquist = half sample rate.");
        if (n % 8 === 4) return item(`RMS of constant ${a} = ?`, a, "RMS of constant equals magnitude.");
        if (n % 8 === 5) return item(`Median filter replaces value with ? (1=mean,2=median)`, 2, "Takes the median of neighbors.");
        if (n % 8 === 6) return item(`${a * 50} ms window at 1000 Hz has how many samples?`, a * 50, "ms/1000 x 1000 = ms.");
        return item(`Envelope detection tracks signal ? (1=peak,2=zero)`, 1, "Follows the peak amplitude.");
      case "Control Systems Math":
        if (n % 8 === 0) return item(`Target=${a * 10}, measured=${b * 5}. Error = ?`, a * 10 - b * 5, "target - measured.");
        if (n % 8 === 1) return item(`Kp=${a}, error=${b}. P output = ?`, a * b, "Kp x error.");
        if (n % 8 === 2) return item(`If measured > target by ${a}, error sign? (-1 or 1)`, -1, "Error = target - measured.");
        if (n % 8 === 3) return item(`${a * 10} Hz control loop period in ms = ?`, Math.round(1000 / (a * 10)), "Period = 1000/f.");
        if (n % 8 === 4) return item(`Steady-state error: target=${a * 10}, settled=${a * 8}. Error = ?`, a * 2, "target - settled.");
        if (n % 8 === 5) return item(`Control loop runs at ${a * 50} Hz. Period in ms = ?`, Math.round(1000 / (a * 50)), "1/f in ms.");
        if (n % 8 === 6) return item(`P-only control always has ? error (1=steady-state,2=zero)`, 1, "Pure P has steady-state error.");
        return item(`Ki term accumulates ? over time (1=error,2=output)`, 1, "Integral accumulates error.");
      case "ML Basics & Loss Functions":
        if (n % 8 === 0) return item(`Prediction=${a + b}, actual=${a}. Error = ?`, b, "prediction - actual.");
        if (n % 8 === 1) return item(`Error of ${a} squared = ?`, a * a, "Square the error.");
        if (n % 8 === 2) return item(`${a * 10} correct out of 100. Accuracy percent = ?`, a * 10, "correct / total x 100.");
        if (n % 8 === 3) return item(`Binary classification has how many classes?`, 2, "Two classes.");
        if (n % 8 === 4) return item(`MAE for errors [${a}, ${b}] = ?`, (a + b) / 2, "Sum of absolute errors divided by count.");
        if (n % 8 === 5) return item(`MSE: error=${c}. Square = ?`, c * c, "Square the error value.");
        if (n % 8 === 6) return item(`Learning rate 0.1 x gradient ${a} = update? (type 0.x)`, a * 0.1, "lr x gradient.");
        return item(`Batch size ${a * 10} from 100 samples gives batches = ?`, 10, "100 / batch size.");
      case "Neural Network Math":
        if (n % 8 === 0) return item(`ReLU(${a}) = ?`, a, "Positive passes through.");
        if (n % 8 === 1) return item(`ReLU(${-a}) = ?`, 0, "Negative clips to zero.");
        if (n % 8 === 2) return item(`A neuron with ${a} inputs has how many weights?`, a, "One weight per input.");
        if (n % 8 === 3) return item(`Sigmoid outputs between 0 and ?`, 1, "Sigmoid range is 0 to 1.");
        if (n % 8 === 4) return item(`Tanh outputs between -1 and ?`, 1, "Tanh ranges from -1 to 1.");
        if (n % 8 === 5) return item(`Softmax outputs for ${a} classes sum to ?`, 1, "Probabilities sum to 1.");
        if (n % 8 === 6) return item(`Bias term adds how many parameters per neuron?`, 1, "One bias per neuron.");
        return item(`Dropout rate 0.${a} keeps ? percent`, (1 - a / 10) * 100, "100 * (1 - dropout).");
      case "Quantization & Numeric Precision":
        if (n % 8 === 0) return item(`uint8 max = ?`, 255, "0 to 255 range.");
        if (n % 8 === 1) return item(`int8 max = ?`, 127, "-128 to 127 range.");
        if (n % 8 === 2) return item(`uint8 min = ?`, 0, "Unsigned minimum is 0.");
        if (n % 8 === 3) return item(`int8 min = ?`, -128, "-128 is the minimum.");
        if (n % 8 === 4) return item(`uint16 max = ?`, 65535, "0 to 65535 range.");
        if (n % 8 === 5) return item(`int16 max = ?`, 32767, "-32768 to 32767 range.");
        if (n % 8 === 6) return item(`Float32 has how many bits?`, 32, "32-bit floating point.");
        return item(`Float32 mantissa precision ~ ? decimal digits`, 7, "~7 decimal digits of precision.");
      case "Model Evaluation & Deployment Math":
        if (n % 8 === 0) return item(`TP=${a}, FP=${b}. Total positive predictions = ?`, a + b, "TP + FP.");
        if (n % 8 === 1) return item(`TP=${a}, FN=${b}. Total actual positives = ?`, a + b, "TP + FN.");
        if (n % 8 === 2) return item(`Inference ${a * 10} ms. Max per second = ?`, Math.round(1000 / (a * 10)), "1000 / latency.");
        if (n % 8 === 3) return item(`Model ${b * 10} KB, flash ${a * 32} KB. Remaining = ?`, a * 32 - b * 10, "Budget minus model.");
        if (n % 8 === 4) return item(`TP=${a}, FP=0. Precision percent = ?`, 100, "No false positives = 100% precision.");
        if (n % 8 === 5) return item(`FN=${a}, TP=${b * 5}. Recall percent = ?`, Math.floor((b * 5) / (b * 5 + a) * 100), "TP / (TP + FN).");
        if (n % 8 === 6) return item(`FPS: ${a * 10} ms per frame = ? FPS`, Math.floor(1000 / (a * 10)), "1000 / ms per frame.");
        return item(`Model ${b * 5} MB. Flash ${a * 20} MB. Remaining = ?`, a * 20 - b * 5, "Budget minus model.");
      default:
        return item(`${a} + ${b} = ?`, a + b, "Add the values.");
    }
  }

  switch (topic) {
    case "Number Systems": {
      const value = advanced ? 128 + ((n * 17) % 120) : 16 + ((n * 7) % 80);
      if (n % 8 === 0) return item(`Convert decimal ${value} to hex, then enter the decimal value of that hex.`, value, "Conversion should preserve the same value.");
      if (n % 8 === 1) return item(`How many values can ${a + 4} bits represent?`, 2 ** (a + 4), "n bits represent 2^n values.");
      if (n % 8 === 2) return item(`What is the maximum unsigned value for ${a + 4} bits?`, 2 ** (a + 4) - 1, "Unsigned max is 2^n - 1.");
      if (n % 8 === 3) return item(`Two's complement signed ${a + 4}-bit minimum value is?`, -(2 ** (a + 3)), "Signed minimum is -2^(n-1).");
      if (n % 8 === 4) return item(`Binary ${value} to hex? (enter decimal equivalent)`, value, "Binary to hex preserves value.");
      if (n % 8 === 5) return item(`What is 2^${a + 4} in hex? Enter decimal.`, 2 ** (a + 4), `2^${a+4} in decimal.`);
      if (n % 8 === 6) return item(`Hex 0x${a}${b + 8} to decimal?`, a * 16 + b + 8, "Hex digit x16 plus units.");
      return item(`Signed ${a + 4}-bit max + 1 = ? (two's complement wrap)`, -(2 ** (a + 3)), "Max wraps to min in two's complement.");
    }
    case "Bit Manipulation": {
      const bit = n % (advanced ? 8 : 6);
      if (n % 8 === 0) return item(`1 << ${bit} equals?`, 2 ** bit, "Left shift places a 1 at that bit position.");
      if (n % 8 === 1) return item(`Set bit ${bit} in zero. Result decimal = ?`, 2 ** bit, "Setting one bit produces 2^bit.");
      if (n % 8 === 2) return item(`Clear bit ${bit} from 255. Result decimal = ?`, 255 - 2 ** bit, "255 has all low 8 bits set.");
      if (n % 8 === 3) return item(`Toggle bit ${bit} in ${2 ** bit}. Result decimal = ?`, 0, "Toggling a set bit clears it.");
      if (n % 8 === 4) return item(`(1 << ${bit}) | (1 << ${(bit + 1) % 8}) = ? (decimal)`, 2 ** bit + 2 ** ((bit + 1) % 8), "Set two specific bits.");
      if (n % 8 === 5) return item(`Mask: 0xF0 >> 4 = ? (decimal)`, 15, "0xF0 >> 4 = 0x0F = 15.");
      if (n % 8 === 6) return item(`255 ^ (1 << ${bit}) toggles bit? (1=yes,0=no)`, 1, "XOR toggles a bit.");
      return item(`(~0) in 8-bit unsigned = ? (decimal)`, 255, "Bitwise NOT of 0 is all 1s = 255.");
    }
    case "Boolean Logic": {
      if (n % 8 === 0) return item(`How many truth-table rows are needed for ${a} binary inputs?`, 2 ** a, "Rows = 2^inputs.");
      if (n % 8 === 1) return item(`NAND(1, ${n % 2}) equals?`, n % 2 ? 0 : 1, "NAND is NOT(AND).");
      if (n % 8 === 2) return item(`XOR(${n % 2}, ${(n + 1) % 2}) equals?`, 1, "XOR is true when inputs differ.");
      if (n % 8 === 3) return item(`NOT(${n % 2}) equals?`, n % 2 ? 0 : 1, "NOT flips a Boolean value.");
      if (n % 8 === 4) return item(`NOR(0, 0) equals?`, 1, "NOR is true only when both inputs are false.");
      if (n % 8 === 5) return item(`XOR(${n % 2}, ${n % 2}) equals?`, 0, "XOR is false when inputs are the same.");
      if (n % 8 === 6) return item(`De Morgan: NOT(A AND B) = NOT A ? NOT B (1=OR,2=AND)`, 1, "NOT(A AND B) = NOT A OR NOT B.");
      return item(`How many gates needed for 2-input AND?`, 1, "A single AND gate.");
    }
    case "Algebra": {
      if (n % 8 === 0) return item(`Timer frequency: f_clk=${a * 2}000000 Hz, prescaler=${b}, period=${c * 10}. Frequency rounded down = ?`, Math.floor((a * 2000000) / (b * c * 10)), "f = f_clk / (prescaler x period).");
      if (n % 8 === 1) return item(`PWM compare=${a * 10}, period=${a * 20}. Duty percent = ?`, 50, "compare / period x 100.");
      if (n % 8 === 2) return item(`Voltage divider with equal resistors and Vin=${a * 2}V gives Vout = ?`, a, "Equal resistors halve the voltage.");
      if (n % 8 === 3) return item(`Convert ${a} MHz to Hz.`, a * 1000000, "MHz means million hertz.");
      if (n % 8 === 4) return item(`Ohm's Law: I = V/R. V=${a * 3}V, R=${a}Ω. I = ? A`, 3, "I = V / R.");
      if (n % 8 === 5) return item(`Power: P = IV. I=${a}A, V=${b}V. P = ? W`, a * b, "P = I x V.");
      if (n % 8 === 6) return item(`ADC: Vref=${a}V, reading=${128 * (b % 3 + 1)}/256. Voltage = ?`, a * (128 * (b % 3 + 1)) / 256, "reading/256 x Vref.");
      return item(`Period T = 1/f. f=${a * 100} Hz. T = ? ms`, Math.round(10 / a), "T = 1000/(a*100) ms.");
    }
    case "Fixed-Point": {
      const singleB = ((n * 3) % 9) + 1;
      if (n % 8 === 0) return item(`Q8.8 representation of ${a}.0 equals?`, a * 256, "Q8.8 scale is 2^8.");
      if (n % 8 === 1) return item(`Store ${a}.${singleB} using scale 100. Rounded integer = ?`, a * 100 + singleB * 10, "Move two decimal places.");
      if (n % 8 === 2) return item(`Signed ${a + 8}-bit max value is?`, 2 ** (a + 7) - 1, "Signed max is 2^(bits-1)-1.");
      if (n % 8 === 3) return item(`Unsigned ${a + 8}-bit value wraps after how many distinct values?`, 2 ** (a + 8), "Unsigned range size is 2^bits.");
      if (n % 8 === 4) return item(`Q4.4: max integer part with 4 bits?`, 15, "4-bit unsigned max = 15.");
      if (n % 8 === 5) return item(`Q7.1: precision = ? (2^-1 = 0.5. enter 0.5)`, 0.5, "1 fractional bit = 0.5 precision.");
      if (n % 8 === 6) return item(`Scale 16: value ${a}.5 stored as?`, a * 16 + 8, "0.5 x 16 = 8.");
      return item(`int16 max stored in Q8.8 = ?`, 32767, "Q8.8 uses int16 storage.");
    }
    case "Modular Arithmetic": {
      const size = advanced ? 32 : 16;
      if (n % 8 === 0) return item(`${a * size + b} % ${size} = ?`, b, "Modulo keeps the remainder.");
      if (n % 8 === 1) return item(`Ring buffer size ${size}, head ${size - 1}; next head = ?`, 0, "The next index wraps to zero.");
      if (n % 8 === 2) return item(`uint8 value ${250 + (n % 6)} plus ${10 + (n % 8)} wraps to?`, (250 + (n % 6) + 10 + (n % 8)) % 256, "uint8 arithmetic is modulo 256.");
      if (n % 8 === 3) return item(`Clock arithmetic: (${a} + ${b}) % ${c + 8} = ?`, (a + b) % (c + 8), "Add first, then take the remainder.");
      if (n % 8 === 4) return item(`${a * size + b} / ${size} integer division = ?`, a, "Divide discards remainder.");
      if (n % 8 === 5) return item(`Circular buffer: tail = (head + ${a}) % ${size}. head=0, tail=?`, a % size, "(0 + a) % size.");
      if (n % 8 === 6) return item(`uint8 wraps at ?`, 256, "256 values: 0 to 255.");
      return item(`Modular inverse: (${a} * x) % 7 = 1. x = ? (${a} < 7)`, 7 - a + 1, "Trial multiplication until product % 7 = 1.");
    }
    case "Calculus Concepts": {
      if (n % 8 === 0) return item(`Value changes from ${a} to ${a + b * 2} in ${b} seconds. Rate = ?`, 2, "Rate = change / time.");
      if (n % 8 === 1) return item(`A ${a * 10} Hz signal has period in milliseconds rounded down = ?`, Math.floor(1000 / (a * 10)), "T = 1/f.");
      if (n % 8 === 2) return item(`Integral area of constant error ${a} over ${b} seconds = ?`, a * b, "Area = height x width.");
      if (n % 8 === 3) return item(`PID P-term with Kp=${a} and error=${b} equals?`, a * b, "P = Kp x error.");
      if (n % 8 === 4) return item(`PID I-term accumulates error ${a} for ${b} steps = ?`, a * b, "Sum of error over time.");
      if (n % 8 === 5) return item(`Derivative: error goes from ${a} to ${a + b * 2} in 1 step = ?`, b * 2, "Change in error.");
      if (n % 8 === 6) return item(`f(x) = ${a}x + ${b}. f(${c}) - f(${d}) = ?`, a * (c - d), "Change in function = slope x change in x.");
      return item(`Exponential decay: half-life ${a} periods halves value each time. After 3 periods: 1 -> ?`, 0.125, "1/2^3 = 1/8 = 0.125.");
    }
    case "Trigonometry & Signals": {
      if (n % 8 === 0) return item(`A ${a * 100} Hz signal has period in milliseconds rounded down = ?`, Math.floor(1000 / (a * 100)), "Period = 1/f.");
      if (n % 8 === 1) return item(`Peak amplitude ${a}V gives peak-to-peak voltage = ?`, a * 2, "Peak-to-peak is twice amplitude.");
      if (n % 8 === 2) return item(`Three-phase signals are separated by how many degrees?`, 120, "360 / 3.");
      if (n % 8 === 3) return item(`Nyquist minimum sample rate for ${a} kHz signal in Hz = ?`, a * 2000, "Minimum sample rate is 2x frequency.");
      if (n % 8 === 4) return item(`Sin wave with amplitude ${a}V has range -${a}V to +?V`, a, "Amplitude defines peak deviation.");
      if (n % 8 === 5) return item(`Duty cycle of ${a * 10}% means on for ${a * 10}% of ? (1=period,2=second)`, 1, "Duty is percentage of the period.");
      if (n % 8 === 6) return item(`Angular frequency: ${a} kHz signal has ω = 2π x ${a}000. ω approx? (2π≈6.28)`, Math.round(6280 * a), "ω = 2πf ≈ 6.28 x f.");
      return item(`PWM period ${a} ms, duty 50%. On time = ? ms`, a * 0.5, "50% of period.");
    }
    case "Statistics & Probability": {
      if (n % 8 === 0) return item(`Mean of [${a}, ${a + b}, ${a + b * 2}] = ?`, a + b, "Middle of evenly spaced values.");
      if (n % 8 === 1) return item(`Accuracy: ${a * 10} correct out of 100 = ? percent`, a * 10, "correct / total x 100.");
      if (n % 8 === 2) return item(`If variance is ${a * a}, standard deviation = ?`, a, "Standard deviation is sqrt(variance).");
      if (n % 8 === 3) return item(`If mean=${a * 10}, std=${b}, x=${a * 10 + b * c}, z-score = ?`, c, "z = (x - mean) / std.");
      if (n % 8 === 4) return item(`Conditional probability P(A|B) = P(A∩B)/P(B). If both = ${a*10}% and P(B)=${b*10}%, P(A|B) = ?`, Math.round(a/b * 100), "P(A∩B) / P(B).");
      if (n % 8 === 5) return item(`Probability: roll 2 dice. P(sum=7) = 6/36 = ?%`, 17, "6/36 ≈ 17%.");
      if (n % 8 === 6) return item(`95% confidence leaves ?% in tails`, 5, "100% - 95% = 5%.");
      return item(`Sample standard deviation uses denominator n-${a > 3 ? 1 : 1}`, 1, "Bessel's correction: n-1.");
    }
    case "Linear Algebra": {
      if (n % 8 === 0) return item(`Dot product [${a}, ${b}] dot [${c}, ${a}] = ?`, a * c + b * a, "Multiply matching entries and add.");
      if (n % 8 === 1) return item(`A ${a}x${b} matrix contains how many elements?`, a * b, "rows x columns.");
      if (n % 8 === 2) return item(`Dense layer with ${a} inputs and ${b} outputs has how many weights?`, a * b, "inputs x outputs.");
      if (n % 8 === 3) return item(`Dense layer with ${a} inputs and ${b} outputs has weights plus biases = ?`, a * b + b, "Add one bias per output.");
      if (n % 8 === 4) return item(`Matrix product: (${a}x${b}) x (${b}x${c}) => shape? Enter first dim.`, a, "Result shape is (a x c).");
      if (n % 8 === 5) return item(`Vector norm: ||[${a}, 0]|| = ?`, a, "Magnitude of horizontal vector.");
      if (n % 8 === 6) return item(`Outer product [${a}]x[${b}] = ? (1x1 matrix value)`, a * b, "Multiply the two scalars.");
      return item(`Hadamard product [${a},${b}] ∘ [${c},${a}] = first element?`, a * c, "Element-wise multiplication.");
    }
    case "DSP & Feature Extraction": {
      if (n % 8 === 0) return item(`A ${a * 1000} Hz sample rate has Nyquist frequency in Hz = ?`, a * 500, "Nyquist is half the sample rate.");
      if (n % 8 === 1) return item(`${a * 100} ms window at ${b * 100} Hz has how many samples?`, a * b * 10, "seconds x samples per second.");
      if (n % 8 === 2) return item(`Moving average of [${a}, ${a + b}, ${a + b * 2}] = ?`, a + b, "Average evenly spaced values.");
      if (n % 8 === 3) return item(`FFT bin spacing: fs=${a * 1000} Hz, N=${a * 100}. Spacing Hz = ?`, 10, "fs / N.");
      if (n % 8 === 4) return item(`DC component of [${a}, ${a}, ${a}] = ?`, a, "Constant signal has DC = its value.");
      if (n % 8 === 5) return item(`Signal power: amplitude ${a}V RMS into 1Ω = ? W`, a * a, "P = V^2 / R.");
      if (n % 8 === 6) return item(`Aliasing happens when fs < ? x max frequency`, 2, "fs must be >= 2x max frequency.");
      return item(`Zero padding FFT with ${a * 100} samples to ${a * 200} adds interpolation? (1=yes,0=no)`, 1, "Zero padding interpolates spectrum.");
    }
    case "Control Systems Math": {
      if (n % 8 === 0) return item(`Target=${a * 10}, measured=${b * 5}. Error = ?`, a * 10 - b * 5, "target - measured.");
      if (n % 8 === 1) return item(`P controller Kp=${a}, error=${b}. Output = ?`, a * b, "Kp x error.");
      if (n % 8 === 2) return item(`Control loop period ${a} ms means frequency rounded down in Hz = ?`, Math.floor(1000 / a), "Frequency = 1000 / ms.");
      if (n % 8 === 3) return item(`Command ${255 + a} clipped to uint8 max gives?`, 255, "Saturation limits output.");
      if (n % 8 === 4) return item(`Feedforward: known disturbance ${a} compensated by output ?`, a, "Feedforward cancels known disturbance.");
      if (n % 8 === 5) return item(`Deadband: error < ${a} ignored. Error=${b}, output if b < a?`, 0, "Inside deadband, output = 0.");
      if (n % 8 === 6) return item(`Rise time from 10% to 90% of target = ${a*10}ms to ${a*9}ms. Duration = ?`, a * 9 - a * 10, "Difference in ms.");
      return item(`Settling time within 5% of ${a*10}. Range: ${a*9.5} to ${a*10.5}. Max deviation?`, a * 0.5, "5% of a*10.");
    }
    case "ML Basics & Loss Functions": {
      if (n % 8 === 0) return item(`Prediction=${a + b}, actual=${a}. Error = ?`, b, "prediction - actual.");
      if (n % 8 === 1) return item(`MSE for one error ${a} equals?`, a * a, "Square the error.");
      if (n % 8 === 2) return item(`${a * 10} correct out of 100 gives accuracy percent = ?`, a * 10, "correct / total x 100.");
      if (n % 8 === 3) return item(`Dataset ${a * 100} samples, batch size ${a * 10}. Batches per epoch = ?`, 10, "samples / batch size.");
      if (n % 8 === 4) return item(`Cross-entropy for correct class prob ${a/10} = ?(-ln(${a/10}))`, -Math.log(a / 10), "CE = -ln(p) for correct class.");
      if (n % 8 === 5) return item(`L1 regularization: λ=${a*0.1}, weight=${b}. L1 penalty = ?`, a * 0.1 * Math.abs(b), "λ x |weight|.");
      if (n % 8 === 6) return item(`Gradient descent step: w = w - lr * grad. lr=${a*0.1}, grad=${b}. Step = ?`, a * 0.1 * b, "lr x grad.");
      return item(`Huber loss: error ${a}, delta=1. Error > delta: loss = delta*(|error|-delta/2)`, 1 * (Math.abs(a) - 0.5), "Delta*(|error| - delta/2).");
    }
    case "Neural Network Math": {
      if (n % 8 === 0) return item(`ReLU(${-a}) = ?`, 0, "ReLU clips negative values to zero.");
      if (n % 8 === 1) return item(`ReLU(${a}) = ?`, a, "Positive values pass through.");
      if (n % 8 === 2) return item(`3x3 convolution has how many weights per input channel?`, 9, "3 x 3.");
      if (n % 8 === 3) return item(`Dense layer ${a} inputs, ${b} outputs, weights plus biases = ?`, a * b + b, "inputs x outputs + outputs.");
      if (n % 8 === 4) return item(`Max pooling 2x2 reduces size by factor?`, 4, "2x2 pooling divides dimensions by 2, area by 4.");
      if (n % 8 === 5) return item(`1x1 convolution: kernel size 1, filters ${a}. Weights per channel?`, a, "1x1 convolution = a weights.");
      if (n % 8 === 6) return item(`Batch norm: mean=0, std=1, input=${a}. Output if learned params = identity?`, a, "Identity if scale=1, shift=0.");
      return item(`Attention: query matches ${a} keys. Weight sum combines ? values`, a, "Weighted sum of a values.");
    }
    case "Quantization & Numeric Precision": {
      if (n % 8 === 0) return item(`uint8 maximum value is?`, 255, "uint8 range is 0 to 255.");
      if (n % 8 === 1) return item(`int8 maximum value is?`, 127, "signed int8 range is -128 to 127.");
      if (n % 8 === 2) return item(`scale=${a}, zero_point=0, q=${b}. Real value = ?`, a * b, "real = scale x q.");
      if (n % 8 === 3) return item(`Float32 uses 4 bytes; int8 uses how many byte?`, 1, "int8 is one byte.");
      if (n % 8 === 4) return item(`Per-tensor quantization: one scale per ? (1=tensor,2=channel)`, 1, "One scale for entire tensor.");
      if (n % 8 === 5) return item(`Per-channel quantization: one scale per ${a > 3 ? "channel" : "filter"}`, a > 3 ? 1 : 0, "Different scale per channel.");
      if (n % 8 === 6) return item(`Symmetrical quantization: zero_point = ?`, 0, "Symmetric has zero_point = 0.");
      return item(`Asymmetric quantization: real 0 maps to ? (if zero_point=128)`, 128, "q = round(real/scale) + 128.");
    }
    case "Model Evaluation & Deployment Math": {
      if (n % 8 === 0) return item(`Precision with TP=${a}, FP=${b}: percent rounded down = ?`, Math.floor((a / (a + b)) * 100), "TP / (TP + FP).");
      if (n % 8 === 1) return item(`Recall with TP=${a}, FN=${b}: percent rounded down = ?`, Math.floor((a / (a + b)) * 100), "TP / (TP + FN).");
      if (n % 8 === 2) return item(`Inference ${a * 5} ms means max inferences/sec rounded down = ?`, Math.floor(1000 / (a * 5)), "1000 / latency_ms.");
      if (n % 8 === 3) return item(`Flash budget ${a * 32} KB, model ${b * 8} KB. Remaining KB = ?`, a * 32 - b * 8, "budget - model size.");
      if (n % 8 === 4) return item(`RAM budget ${a * 16} KB, tensor arena ${b * 4} KB. Remaining = ?`, a * 16 - b * 4, "Budget minus arena.");
      if (n % 8 === 5) return item(`True negative rate: TN=90, FP=10. TNR percent = ?`, 90, "TN / (TN + FP).");
      if (n % 8 === 6) return item(`F1 score for P=80%, R=80% = ?%`, 80, "2PR/(P+R) = 2(80)(80)/(160) = 80.");
      return item(`Energy per inference: ${a * 10} mJ. ${b * 100} inferences. Total energy mJ = ?`, a * 10 * b * 100, "Energy per inference x number.");
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
const EXAM_LENGTHS = [25, 50, 75, 100, 250, 500, 1000];
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
  foundationsQuizLength: Number(localStorage.getItem("firmwareMathFoundationsLength") || 100),
  cs50Progress: JSON.parse(localStorage.getItem("firmwareMathCS50Progress") || "{}"),
  foundationsView: "overview",
  foundationsSubTab: "levels",
  foundationsQuizTopic: "All",
  foundationsLevel: "Easy",
  foundationsCurrentLevel: 0,
  fQueue: [],
  fIdx: 0,
  fInput: "",
  fFeedback: null,
  fShowHint: false,
  fScore: 0,
  cs50SubTab: "weeks",
  cs50QuizTopic: "All",
  cs50Queue: [],
  cs50QIdx: 0,
  cs50Input: "",
  cs50Feedback: null,
  cs50ShowHint: false,
  cs50Score: 0,
  cs50CurrentWeek: null,
  cs50QuizLength: Number(localStorage.getItem("firmwareMathCS50Length") || 25),
  cs50Level: "Easy",
  studySubTab: "guide",
  theme: localStorage.getItem("firmwareMathTheme") || "dark",
};

if (![25, 50, 75, 100, 250, 500, 1000].includes(state.foundationsQuizLength)) state.foundationsQuizLength = 100;

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
  localStorage.setItem("firmwareMathCS50Length", String(state.cs50QuizLength));
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
  const correct = Math.abs(Number.parseFloat(state.input) - q.a) < 0.001;
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
      const prevLevel = FOUNDATIONS[index - 1];
      const unlocked = index === 0 || (prevLevel && (state.foundationsScores[`Intermediate::found::${prevLevel.id}`] || 0) >= 80);
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
  return FOUNDATIONS.some((level) => {
    const key = `${prevLevel}::found::${level.id}`;
    return (state.foundationsScores[key] || 0) >= 80;
  });
}

function isFoundationLevelUnlocked(index) {
  const d = state.foundationsLevel;
  const currentId = FOUNDATIONS[index].id;
  if (d === "Easy") {
    if (index === 0) return true;
    const prevId = FOUNDATIONS[index - 1].id;
    return getFoundationScore(prevId, "Advanced") >= 80;
  }
  if (d === "Intermediate") {
    return getFoundationScore(currentId, "Easy") >= 80;
  }
  if (d === "Advanced") {
    return getFoundationScore(currentId, "Intermediate") >= 80;
  }
  return false;
}

function getFoundationScore(levelId, difficulty) {
  const lvl = difficulty || state.foundationsLevel;
  return state.foundationsScores[`${lvl}::found::${levelId}`] || 0;
}

function getFoundationLevelLockMsg(index) {
  const d = state.foundationsLevel;
  const level = FOUNDATIONS[index];
  if (d === "Easy") {
    const prev = FOUNDATIONS[index - 1];
    return `Score 80% on \u201c${esc(prev.title)}\u201d in Advanced to unlock`;
  }
  if (d === "Intermediate") {
    return `Score 80% on \u201c${esc(level.title)}\u201d in Easy to unlock`;
  }
  return `Score 80% on \u201c${esc(level.title)}\u201d in Intermediate to unlock`;
}

function getFoundationUnlockNote(index, passed) {
  const d = state.foundationsLevel;
  if (!passed) {
    if (d === "Easy") return '<p class="foundation-unlock-note">Score 80% to unlock Intermediate for this chapter.</p>';
    if (d === "Intermediate") return '<p class="foundation-unlock-note">Score 80% to unlock Advanced for this chapter.</p>';
    return '<p class="foundation-unlock-note">Score 80% to master this chapter at Advanced.</p>';
  }
  if (d === "Easy") {
    return '<p class="foundation-unlock-note" style="color:var(--green)">Intermediate for this chapter unlocked! \u2191</p>';
  }
  if (d === "Intermediate") {
    return '<p class="foundation-unlock-note" style="color:var(--green)">Advanced for this chapter unlocked! \u2191</p>';
  }
  if (index >= FOUNDATIONS.length - 1) return '<p class="foundation-unlock-note" style="color:var(--green)">All chapters mastered!</p>';
  if (d === "Advanced") {
    const next = FOUNDATIONS[index + 1];
    return `<p class="foundation-unlock-note" style="color:var(--green)">\u201c${esc(next.title)}\u201d unlocked at Easy! \u2192</p>`;
  }
  return '';
}

function isFoundationQuizDifficultyUnlocked(levelId, difficulty) {
  if (difficulty === "Easy") return true;
  const prev = difficulty === "Advanced" ? "Intermediate" : "Easy";
  return (state.foundationsScores[`${prev}::found::${levelId}`] || 0) >= 80;
}

function isFoundationQuizChapterUnlocked(index) {
  if (index <= 0) return true;
  const prevId = FOUNDATIONS[index - 1].id;
  return (state.foundationsScores[`Advanced::found::${prevId}`] || 0) >= 80;
}

function isCS50QuizDifficultyUnlocked(weekId, difficulty) {
  if (difficulty === "Easy") return true;
  const prev = difficulty === "Advanced" ? "Intermediate" : "Easy";
  return (state.cs50Progress[`${prev}::cs50::${weekId}`] || 0) >= 80;
}

function isCS50QuizWeekUnlocked(index) {
  if (index <= 0) return true;
  const prevId = CS50_WEEKS[index - 1].id;
  return (state.cs50Progress[`Advanced::cs50::${prevId}`] || 0) >= 80;
}

function renderFoundations() {
  const sub = state.foundationsSubTab;
  $("foundationsView").innerHTML = `
    <nav class="study-sub-tabs">
      <button class="sub-tab ${sub === "levels" ? "active" : ""}" data-fsub="levels">Levels</button>
      <button class="sub-tab ${sub === "quiz" ? "active" : ""}" data-fsub="quiz">Quiz</button>
    </nav>
    <div id="foundationsSubContent"></div>`;
  document.querySelectorAll("[data-fsub]").forEach((btn) => btn.addEventListener("click", () => {
    state.foundationsSubTab = btn.dataset.fsub;
    renderFoundations();
  }));
  if (sub === "levels") renderFoundationsLevels();
  else renderFoundationsQuizSetup();
}

function renderFoundationsLevels() {
  state.foundationsView = "overview";
  $("foundationsSubContent").innerHTML = `
    <p class="section-intro">Each chapter has Easy \u2192 Intermediate \u2192 Advanced. Pass Easy at 80% to unlock Intermediate for that chapter. Pass Intermediate at 80% to unlock the next chapter at Easy.</p>
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
              : `<span class="foundation-locked-msg">${getFoundationLevelLockMsg(index)}</span>`}
          </div>
        </div>`;
      }).join("")}
    </div>`;
  document.querySelectorAll("[data-foundtrack]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!isFoundationDifficultyUnlocked(btn.dataset.foundtrack)) return;
      state.foundationsLevel = btn.dataset.foundtrack;
      renderFoundationsLevels();
    });
  });
  document.querySelectorAll(".foundation-card.unlocked").forEach((card) => {
    card.addEventListener("click", () => renderFoundationLevel(Number(card.dataset.level)));
  });
}

function renderFoundationsQuizSetup() {
  const onAll = state.foundationsQuizTopic === "All";
  const currentId = onAll ? null : state.foundationsQuizTopic;
  if (currentId && !isFoundationQuizDifficultyUnlocked(currentId, state.foundationsLevel)) {
    const fallback = FOUNDATIONS_LEVELS.find((l) => isFoundationQuizDifficultyUnlocked(currentId, l)) || "Easy";
    state.foundationsLevel = fallback;
  } else if (onAll && !isFoundationDifficultyUnlocked(state.foundationsLevel)) {
    const fallback = FOUNDATIONS_LEVELS.find((l) => isFoundationDifficultyUnlocked(l)) || "Easy";
    state.foundationsLevel = fallback;
  }
  const levelIds = FOUNDATIONS.map((l) => l.id);
  const unlockedChapterIds = levelIds.filter((_, i) => isFoundationQuizChapterUnlocked(i));
  const saved = localStorage.getItem("firmwareMathFoundSession");
  let resumeHtml = "";
  if (saved) {
    try {
      const s = JSON.parse(saved);
      if (s.queue && s.queue.length) {
        const cur = (s.fIdx ?? 0) + 1;
        resumeHtml = `<div class="resume-card"><span>Unfinished quiz · Q${cur}/${s.queue.length} · ${s.fScore ?? 0} correct</span><div><button class="primary" id="fQuizResumeBtn">Resume</button><button class="secondary" id="fQuizDiscardBtn" style="margin-left:8px">Start from first</button></div></div>`;
      }
    } catch {}
  }
  $("foundationsSubContent").innerHTML = `
    <p class="section-intro">Progress through Easy → Intermediate → Advanced per chapter, then unlock the next chapter.</p>
    ${resumeHtml}
    <div class="track-switch" aria-label="foundations difficulty">
      ${FOUNDATIONS_LEVELS.map((level) => {
        const locked = currentId ? !isFoundationQuizDifficultyUnlocked(currentId, level) : !isFoundationDifficultyUnlocked(level);
        return `<button class="track-button ${state.foundationsLevel === level ? "active" : ""} ${locked ? "locked" : ""}" data-fqtrack="${level}" ${locked ? "disabled" : ""}>${level}${locked ? " locked" : ""}</button>`;
      }).join("")}
    </div>
    <div class="filter-panel">
      <div><div class="filter-title">TOPIC</div><div class="filter-buttons">${["All", ...unlockedChapterIds].map((id) => {
        const label = id === "All" ? "All" : FOUNDATIONS.find((l) => l.id === id).title;
        return `<button class="filter-button ${state.foundationsQuizTopic === id ? "active" : ""}" data-fqtopic="${id}">${esc(label)}</button>`;
      }).join("")}</div></div>
      <div><div class="filter-title">EXAM LENGTH</div><div class="length-buttons">${EXAM_LENGTHS.map((count) => `<button class="length-button ${state.foundationsQuizLength === count ? "active" : ""}" data-flength="${count}">${count}</button>`).join("")}</div></div>
      <button class="primary" id="startFoundQuiz">Start Exam (${state.foundationsQuizLength} questions) \u2192</button>
    </div>`;
  if (resumeHtml) {
    $("fQuizResumeBtn").addEventListener("click", () => {
      restoreFoundationSession();
      renderFoundationQuestion();
    });
    $("fQuizDiscardBtn").addEventListener("click", () => {
      clearFoundationSession();
      renderFoundationsQuizSetup();
    });
  }
  document.querySelectorAll("[data-fqtrack]").forEach((btn) => {
    const onAll = state.foundationsQuizTopic === "All";
    const chk = onAll ? isFoundationDifficultyUnlocked(btn.dataset.fqtrack) : isFoundationQuizDifficultyUnlocked(state.foundationsQuizTopic, btn.dataset.fqtrack);
    if (!chk) return;
    btn.addEventListener("click", () => {
      state.foundationsLevel = btn.dataset.fqtrack;
      renderFoundationsQuizSetup();
    });
  });
  document.querySelectorAll("[data-flength]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.foundationsQuizLength = Number(btn.dataset.flength);
      saveProgress();
      renderFoundationsQuizSetup();
    });
  });
  $("startFoundQuiz").addEventListener("click", startFoundationsQuiz);
}

function startFoundationsQuiz() {
  clearFoundationSession();
  let pool = [];
  if (state.foundationsQuizTopic === "All") {
    for (let i = 0; i < FOUNDATIONS.length; i++) {
      if (isFoundationQuizChapterUnlocked(i)) pool = pool.concat(getFoundationPool(i, 999, state.foundationsLevel));
    }
  } else {
    const idx = FOUNDATIONS.findIndex((l) => l.id === state.foundationsQuizTopic);
    if (idx >= 0) pool = getFoundationPool(idx, 999, state.foundationsLevel);
  }
  if (!pool.length) { renderFoundationsQuizSetup(); return; }
  state.fQueue = shuffle(pool).slice(0, Math.min(state.foundationsQuizLength, pool.length));
  state.fIdx = 0;
  state.fInput = "";
  state.fFeedback = null;
  state.fShowHint = false;
  state.fScore = 0;
  state.foundationsView = "quiz";
  saveFoundationSession();
  renderFoundationQuestion();
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
          ? `${getFoundationUnlockNote(index, passed)}`
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

function makeFoundationQuestion(id, levelIndex, n, difficulty) {
  n = Math.floor(n);
  const a = (n % 9) + 2;
  const b = ((n * 3) % 11) + 1;
  const c = ((n * 5) % 13) + 2;
  const d = ((n * 7) % 15) + 1;
  const e = ((n * 11) % 17) + 1;
  const easy = difficulty === "Easy";
  const advanced = difficulty === "Advanced";
  const r = (n % 12);
  const fallback = (q, ans, hint) => ({ id, q, a: ans, hint });

  if (easy) {
    switch (levelIndex) {
      case 0:
        if (r === 0) return fallback(`${a} + ${b} = ?`, a + b, "Add the numbers.");
        if (r === 1) return fallback(`${a} x ${b} = ?`, a * b, "Multiply.");
        if (r === 2) return fallback(`${a * 10} - ${b} = ?`, a * 10 - b, "Subtract.");
        if (r === 3) return fallback(`${a * b} / ${a} = ?`, b, "Divide.");
        if (r === 4) return fallback(`${a} + ${b} + ${c} = ?`, a + b + c, "Add all three.");
        if (r === 5) return fallback(`${a} x ${10} = ?`, a * 10, "Multiply by 10.");
        if (r === 6) return fallback(`${a * b} - ${a} = ?`, a * b - a, "Subtract.");
        if (r === 7) return fallback(`${a}0 + ${b} = ?`, a * 10 + b, "Tens plus ones.");
        if (r === 8) return fallback(`${b} x ${a} = ?`, a * b, "Multiply (commutative).");
        if (r === 9) return fallback(`${a + b} - ${a} = ?`, b, "Subtract the first number.");
        if (r === 10) return fallback(`${a} x ${a} = ?`, a * a, "Square it.");
        return fallback(`${a * 2} / 2 = ?`, a, "Divide by 2.");
      case 1:
        if (r === 0) return fallback(`x + ${a} = ${a + b}, x = ?`, b, `Subtract ${a}.`);
        if (r === 1) return fallback(`${a}x = ${a * b}, x = ?`, b, `Divide by ${a}.`);
        if (r === 2) return fallback(`x - ${a} = ${b}, x = ?`, a + b, `Add ${a}.`);
        if (r === 3) return fallback(`x / ${a} = ${b}, x = ?`, a * b, `Multiply by ${a}.`);
        if (r === 4) return fallback(`${a} + x = ${a + b}, x = ?`, b, `Subtract ${a}.`);
        if (r === 5) return fallback(`y = ${a}x, x = ${b}, y = ?`, a * b, `Multiply ${a} x ${b}.`);
        if (r === 6) return fallback(`${a}x - ${a} = 0, x = ?`, 1, `Add ${a}, then divide by ${a}.`);
        if (r === 7) return fallback(`x + ${a} = ${b + a}, x = ?`, b, `Subtract ${a}.`);
        if (r === 8) return fallback(`x - ${b} = ${a}, x = ?`, a + b, `Add ${b}.`);
        if (r === 9) return fallback(`${a} = ${b} - x, x = ?`, b - a, `Rearrange: x = ${b} - ${a}.`);
        if (r === 10) return fallback(`y = ${a}x + 0, x = ${b}, y = ?`, a * b, `Substitute ${b}.`);
        return fallback(`x / ${b} = ${a}, x = ?`, a * b, `Multiply by ${b}.`);
      case 2:
        if (r === 0) return fallback(`Slope (0,0) to (${a},${a * b}) = ?`, b, `Slope = ${a * b}/${a}.`);
        if (r === 1) return fallback(`f(x) = ${a}x, f(${b}) = ?`, a * b, `Plug in ${b}.`);
        if (r === 2) return fallback(`y-intercept of y = ${a}x + ${b} = ?`, b, "Constant term.");
        if (r === 3) return fallback(`x^2 = ${a * a}, positive x = ?`, a, `${a} x ${a}.`);
        if (r === 4) return fallback(`f(x)=${a}x+${b}, f(${c}) = ?`, a * c + b, `Plug ${c} into x.`);
        if (r === 5) return fallback(`${a}x = ${a * b}, x = ?`, b, `Divide by ${a}.`);
        if (r === 6) return fallback(`Slope of y = ${a}x is ?`, a, "Coefficient of x.");
        if (r === 7) return fallback(`Line y = ${a}x + ${b}: slope = ?`, a, "Coefficient of x.");
        if (r === 8) return fallback(`f(x) = ${a}x, f(1) + f(2) = ?`, a * 3, `f(1)+f(2) = ${a}+${2*a}.`);
        if (r === 9) return fallback(`x + ${a} = ${a + b}, x = ?`, b, `Subtract ${a}.`);
        if (r === 10) return fallback(`x - ${b} = ${a}, x = ?`, a + b, `Add ${b}.`);
        return fallback(`Slope horizontal line y = ${a} = ?`, 0, "Horizontal = zero slope.");
      case 3:
        if (r === 0) return fallback(`Area of ${a} x ${b} rectangle = ?`, a * b, "l x w.");
        if (r === 1) return fallback(`Perimeter of ${a} square = ?`, a * 4, "4 x side.");
        if (r === 2) return fallback(`Area of ${a} x ${a} square = ?`, a * a, "side^2.");
        if (r === 3) return fallback(`${a} m = ? cm`, a * 100, "1 m = 100 cm.");
        if (r === 4) return fallback(`${a} km = ? m`, a * 1000, "1 km = 1000 m.");
        if (r === 5) return fallback(`1 kg = ? g`, 1000, "kilo = 1000.");
        if (r === 6) return fallback(`Triangle area base ${a} height ${b} = ?`, (a * b) / 2, "1/2 x b x h.");
        if (r === 7) return fallback(`Circle radius ${a}, pi=3. Area = ?`, 3 * a * a, "pi x r^2.");
        if (r === 8) return fallback(`Circle radius ${a}, pi=3. Circum = ?`, 6 * a, "2 x pi x r.");
        if (r === 9) return fallback(`Volume ${a} cube = ?`, a * a * a, "side^3.");
        if (r === 10) return fallback(`${a} cm = ? mm`, a * 10, "1 cm = 10 mm.");
        return fallback(`Perimeter ${a} x ${b} rect = ?`, 2 * (a + b), "2(l + w).");
      case 4:
        if (r === 0) return fallback(`A full circle = ? degrees`, 360, "360 degrees.");
        if (r === 1) return fallback(`Right angle = ? degrees`, 90, "90 degrees.");
        if (r === 2) return fallback(`sin(0) = ?`, 0, "Sine starts at 0.");
        if (r === 3) return fallback(`cos(0) = ?`, 1, "Cosine max at 0.");
        if (r === 4) return fallback(`sin(90) = ?`, 1, "Sine peaks at 90.");
        if (r === 5) return fallback(`cos(90) = ?`, 0, "Cosine zero at 90.");
        if (r === 6) return fallback(`Triangle angles sum to ?`, 180, "180 degrees.");
        if (r === 7) return fallback(`sin(180) = ?`, 0, "Sine zero crossing.");
        if (r === 8) return fallback(`cos(180) = ?`, -1, "Cosine minimum.");
        if (r === 9) return fallback(`Acute angle < ? degrees`, 90, "Acute < 90.");
        if (r === 10) return fallback(`Obtuse angle > ? degrees`, 90, "Obtuse > 90.");
        return fallback(`sin(0) + cos(0) = ?`, 1, "0 + 1.");
      case 5:
        if (r === 0) return fallback(`2^${a} = ?`, 2 ** a, `2 to power ${a}.`);
        if (r === 1) return fallback(`10^${b} = ?`, 10 ** b, `10^${b}.`);
        if (r === 2) return fallback(`2^${a} x 2 = 2^?`, a + 1, "Add exponent 1.");
        if (r === 3) return fallback(`Next: ${a}, ${a * 2}, ${a * 4}, ?`, a * 8, "Doubles each time.");
        if (r === 4) return fallback(`3^2 = ?`, 9, "3 x 3.");
        if (r === 5) return fallback(`2^0 = ?`, 1, "Anything to 0 = 1.");
        if (r === 6) return fallback(`10^3 = ?`, 1000, "1 followed by 3 zeros.");
        if (r === 7) return fallback(`Next: ${b}, ${b + a}, ${b + 2 * a}, ?`, b + 3 * a, `Adds by ${a}.`);
        if (r === 8) return fallback(`2^1 = ?`, 2, "2.");
        if (r === 9) return fallback(`10^1 = ?`, 10, "10.");
        if (r === 10) return fallback(`2^3 = ?`, 8, "2 x 2 x 2.");
        return fallback(`10^0 = ?`, 1, "Anything to 0 = 1.");
      case 6:
        if (r === 0) return fallback(`Change ${a} to ${a + b}: diff = ?`, b, `${a + b} - ${a}.`);
        if (r === 1) return fallback(`Area ${a} x ${b} rect = ?`, a * b, "l x w.");
        if (r === 2) return fallback(`Slope y = ${a}x + ${b} = ?`, a, "Coefficient of x.");
        if (r === 3) return fallback(`f(t)=${a}t, f(${b}) = ?`, a * b, `Multiply ${a} x ${b}.`);
        if (r === 4) return fallback(`Rate: ${a * 5} units / ${a} sec = ?`, 5, "Divide.");
        if (r === 5) return fallback(`Const ${a} slope = ?`, 0, "Constant = zero slope.");
        if (r === 6) return fallback(`f(x) = ${a}x, f(3) = ?`, a * 3, `Multiply ${a} x 3.`);
        if (r === 7) return fallback(`f(x) = ${a}x, f(2) + f(1) = ?`, a * 3, `${2*a} + ${a}.`);
        if (r === 8) return fallback(`${a} m in ${a} sec: avg speed = ?`, 1, "1 m/s.");
        if (r === 9) return fallback(`f(x) = ${a}x, f(0) = ?`, 0, "Anything x 0 = 0.");
        if (r === 10) return fallback(`Distance ${a * 10} in ${a}s: rate = ?`, 10, "Divide.");
        return fallback(`Value ${a} to ${a * 2}: factor = ?`, 2, "Doubled.");
      default:
        return fallback(`${a} + ${b} = ?`, a + b, "Add.");
    }
  } else if (advanced) {
    switch (levelIndex) {
      case 0:
        if (r === 0) return fallback(`(${a} + ${b}) x ${c} - ${d} = ?`, (a + b) * c - d, "PEMDAS: parens, multiply, subtract.");
        if (r === 1) return fallback(`${a}/${b} + ${c}/${b} = ? (enter fraction num/den)`, (a + c) / b, `Add numerators: ${a + c}/${b}.`);
        if (r === 2) return fallback(`${a * b} percent of ${c * 10} = ?`, (a * b / 100) * (c * 10), `${a*b}/100 x ${c*10}.`);
        if (r === 3) return fallback(`${a}^2 + ${b}^2 = ?`, a * a + b * b, "Square each, then add.");
        if (r === 4) return fallback(`${a * b} / ${a} + ${c} x ${d} = ?`, b + c * d, "Divide, multiply, then add.");
        if (r === 5) return fallback(`(${a} + ${b}) x (${c} - ${d}) = ?`, (a + b) * (c - d), "Parens first.");
        if (r === 6) return fallback(`${a * c} / ${c} + ${b * d} / ${d} = ?`, a + b, "Simplify each fraction.");
        if (r === 7) return fallback(`sqrt(${a * a}) + sqrt(${b * b}) = ?`, a + b, `sqrt = ${a} + ${b}.`);
        if (r === 8) return fallback(`${a}^3 = ?`, a * a * a, `${a} x ${a} x ${a}.`);
        if (r === 9) return fallback(`${a * 10} - ${b * 5} + ${c * 2} = ?`, a * 10 - b * 5 + c * 2, "Left to right.");
        if (r === 10) return fallback(`${a} + ${b} x ${c} - ${d} = ?`, a + b * c - d, "Multiply before add/sub.");
        return fallback(`(${a}.${b % 10} + ${c}.${d % 10}) rounded = ?`, Math.round(a + c + (b % 10 + d % 10) / 10), "Add then round.");
      case 1:
        if (r === 0) return fallback(`${a}(x + ${b}) = ${a * (c + b)}, x = ?`, c, `Divide by ${a}, subtract ${b}.`);
        if (r === 1) return fallback(`${a}x/${b} = ${c}, x = ?`, c * b / a, `Multiply by ${b}, divide by ${a}.`);
        if (r === 2) return fallback(`y = ${a}x + ${b}, x = ${c} -> y = ?`, a * c + b, `Substitute ${c}.`);
        if (r === 3) return fallback(`${a}x + ${b}x = ${(a + b) * c}, x = ?`, c, `Combine: ${a + b}x = ${(a + b) * c}.`);
        if (r === 4) return fallback(`y = ${a}x^2, x = ${b}, y = ?`, a * b * b, `${a} x ${b}^2.`);
        if (r === 5) return fallback(`V = IR, I = ${a}, R = ${b}, V = ?`, a * b, "Ohm's Law.");
        if (r === 6) return fallback(`P = IV, I = ${a}, V = ${b}, P = ?`, a * b, "Power = current x voltage.");
        if (r === 7) return fallback(`f = ${a}/${b}, g = ${c}/${d}, f + g = ? (enter decimal)`, a / b + c / d, "Add fractions as decimals.");
        if (r === 8) return fallback(`${a}x - ${b} = ${a * c - b}, x = ?`, c, `Add ${b}, then divide by ${a}.`);
        if (r === 9) return fallback(`f(x) = ${a}x + ${b}. f(${c}) - f(${d}) = ?`, a * (c - d), `f(${c}) - f(${d}) = ${a}(${c} - ${d}).`);
        if (r === 10) return fallback(`${a} / x = ${a} / ${b}, x = ?`, b, "Cross multiply.");
        return fallback(`x / ${a} + ${b} = ${b + 1}, x = ?`, a, `Subtract ${b}, multiply by ${a}.`);
      case 2:
        if (r === 0) return fallback(`Perp slope to y = ${a}x + ${b} = ?`, -1 / a, "Negative reciprocal.");
        if (r === 1) return fallback(`f(g(x)), f(x)=2x, g(x)=${a}x. f(g(${b})) = ?`, 2 * a * b, `g(${b}) = ${a * b}, then f = 2x.`);
        if (r === 2) return fallback(`x^2 - ${(a + 1) * (a + 1)} = 0, positive x = ?`, a + 1, `x = sqrt(${(a + 1) ** 2}).`);
        if (r === 3) return fallback(`Vertex x of y = x^2 - ${2 * a}x + ${b} = ?`, a, "Vertex = -b/(2a).");
        if (r === 4) return fallback(`x + y = ${a + b}, x - y = ${a - b}. x = ?`, a, "Add equations.");
        if (r === 5) return fallback(`f(x) = ${a}x + ${b}, g(x) = ${c}x + ${d}. f(${e}) + g(${e}) = ?`, (a + c) * e + b + d, `Add then plug ${e}.`);
        if (r === 6) return fallback(`Line through (0,${b}) with slope ${a}: eqn?`, a * 1000 + b, "y = mx + b.");
        if (r === 7) return fallback(`Slope through (${a},${a * b}) and (${a * 2},${a * b * 2}) = ?`, b, `Rise/run = (${a*b*2}-${a*b})/(${2*a}-${a}).`);
        if (r === 8) return fallback(`x^2 = ${c * c}, x = +/-?`, c, `+/-${c}.`);
        if (r === 9) return fallback(`f(x) = ${a}x + ${b}. f(${c} + ${d}) = ?`, a * (c + d) + b, `Plug ${c + d} for x.`);
        if (r === 10) return fallback(`x-intercept of y = ${a}x + ${b} = ?`, -b / a, `Set y=0: ${a}x + ${b} = 0.`);
        return fallback(`3x + ${a} = ${a + 3}, x = ?`, 1, `Subtract ${a}, divide by 3.`);
      case 3:
        if (r === 0) return fallback(`Cylinder vol r=${a}, h=${b}, pi=3: ?`, 3 * a * a * b, "pi x r^2 x h.");
        if (r === 1) return fallback(`SA of ${a} cube = ?`, 6 * a * a, "6 x side^2.");
        if (r === 2) return fallback(`Trap area b1=${a}, b2=${b}, h=${c}: ?`, ((a + b) * c) / 2, "(b1+b2) x h / 2.");
        if (r === 3) return fallback(`Pythag: legs ${a * 3}, ${a * 4}: hyp = ?`, a * 5, "3-4-5 triple scaled.");
        if (r === 4) return fallback(`Pythag: leg ${a}, hyp ${a + 2}, other leg = ?`, Math.sqrt((a + 2) ** 2 - a ** 2) > 0 ? Math.round(Math.sqrt((a + 2) ** 2 - a ** 2)) : 2 * a + 2, "c^2 - a^2 = b^2.");
        if (r === 5) return fallback(`${a} gal = ? qt (4 qt/gal)`, a * 4, "4 quarts per gallon.");
        if (r === 6) return fallback(`${a} yd = ? ft (3 ft/yd)`, a * 3, "3 feet per yard.");
        if (r === 7) return fallback(`Sphere vol r=${a}, pi=3: ?`, 4 * a * a * a, "4/3 pi r^3 => 4r^3 when pi=3.");
        if (r === 8) return fallback(`Arc length 60deg r=${a}, pi=3: ?`, a, "60/360 x 2 x pi x r = a.");
        if (r === 9) return fallback(`Rect prism ${a}x${b}x${c} vol = ?`, a * b * c, "l x w x h.");
        if (r === 10) return fallback(`${a} L = ? mL`, a * 1000, "1 L = 1000 mL.");
        return fallback(`Pythag: legs ${a} and ${b}, hyp = ? (nearest int)`, Math.round(Math.sqrt(a * a + b * b)), "sqrt(a^2 + b^2).");
      case 4:
        if (r === 0) return fallback(`sin(30) = ? (decimal)`, 0.5, "1/2.");
        if (r === 1) return fallback(`cos(60) = ? (decimal)`, 0.5, "1/2.");
        if (r === 2) return fallback(`tan(45) = ?`, 1, "sin/cos = 1.");
        if (r === 3) return fallback(`sin(45) approx = ?`, 0.71, "sqrt(2)/2.");
        if (r === 4) return fallback(`cos(45) approx = ?`, 0.71, "sqrt(2)/2.");
        if (r === 5) return fallback(`sin(-90) = ?`, -1, "sin is odd.");
        if (r === 6) return fallback(`cos(-90) = ?`, 0, "cos is even.");
        if (r === 7) return fallback(`sin^2(0) + cos^2(0) = ?`, 1, "Pythagorean identity.");
        if (r === 8) return fallback(`sin(360) = ?`, 0, "Full cycle returns to 0.");
        if (r === 9) return fallback(`cos(360) = ?`, 1, "Full cycle returns to 1.");
        if (r === 10) return fallback(`tan(0) = ?`, 0, "sin(0)/cos(0) = 0/1.");
        return fallback(`sin(90) - cos(180) = ?`, 2, "1 - (-1) = 2.");
      case 5:
        if (r === 0) return fallback(`log2(${2 ** (a + b)}) = ?`, a + b, `2^${a + b}.`);
        if (r === 1) return fallback(`2^${a} x 2^${b} = 2^?`, a + b, "Add exponents.");
        if (r === 2) return fallback(`(2^${a})^${b} = 2^?`, a * b, "Multiply exponents.");
        if (r === 3) return fallback(`2^${a} / 2^${b} = 2^?`, a - b, "Subtract exponents.");
        if (r === 4) return fallback(`log10(${10 ** a}) = ?`, a, `10^${a}.`);
        if (r === 5) return fallback(`Sum 1 to ${a} = ?`, (a * (a + 1)) / 2, "n(n+1)/2.");
        if (r === 6) return fallback(`Fib: 1,1,2,3,5,${a},${a + b} next = ?`, a + (a + b), "Add previous two.");
        if (r === 7) return fallback(`3^${b} = ?`, 3 ** b, `3^${b}.`);
        if (r === 8) return fallback(`2^${a} + 2^${a} = 2^?`, a + 1, "2 x 2^a = 2^(a+1).");
        if (r === 9) return fallback(`10^${a} / 10^${b} = 10^?`, a - b, "Subtract exponents.");
        if (r === 10) return fallback(`log2(${2 ** a}) + log2(${2 ** b}) = ?`, a + b, "log2(x) + log2(y) = log2(xy).");
        return fallback(`log10(${10 ** a} x ${10 ** b}) = ?`, a + b, "log(xy) = log(x) + log(y).");
      case 6:
        if (r === 0) return fallback(`d/dx ${a}x^2 at x=${b}: slope = ?`, 2 * a * b, "d/dx ax^2 = 2ax.");
        if (r === 1) return fallback(`Int ${a} from 0 to ${b}: area = ?`, a * b, "Height x width.");
        if (r === 2) return fallback(`lim x->0 ${a}x / x = ?`, a, "x cancels.");
        if (r === 3) return fallback(`f(x)=${a}x+${b}, f(x+${c})-f(x) = ?`, a * c, "Slope x delta x.");
        if (r === 4) return fallback(`A ${a * 10}Hz period = ? ms`, Math.round(1000 / (a * 10)), "1000/f.");
        if (r === 5) return fallback(`f(x) = ${a}x^2, f'(${b}) = 2*${a}*${b} = ?`, 2 * a * b, "Derivative is 2ax.");
        if (r === 6) return fallback(`lim x->infty ${a}x / (x + ${b}) = ?`, a, "b becomes negligible.");
        if (r === 7) return fallback(`f(x) = ${a}x. Integral 0 to ${b} area = ?`, a * b * b / 2, "Area = 1/2 x base x height.");
        if (r === 8) return fallback(`Halved ${a}x from ${b * 16}: final = ?`, b, `${b * 16} / 2^${a}.`);
        if (r === 9) return fallback(`f(x) = ${a}x. Avg rate ${a} to ${a * 2} = ?`, a, "f(2a)-f(a) / a = a.");
        if (r === 10) return fallback(`d/dx ${a}x = ?`, a, "Derivative of ax is a.");
        return fallback(`Int ${a}x from 0 to ${b}: area = ?`, a * b * b / 2, "Triangle area = 1/2 x base x height.");
      default:
        return fallback(`${a} + ${b} = ?`, a + b, "Add.");
    }
  } else {
    switch (levelIndex) {
      case 0:
        if (r === 0) return fallback(`${a} + ${b} x ${c} = ?`, a + b * c, "Multiply first.");
        if (r === 1) return fallback(`${a * 2} percent of ${b * 50} = ?`, a * b, "Percent = part/whole x 100.");
        if (r === 2) return fallback(`(${a} + ${b}) x ${c} = ?`, (a + b) * c, "Parens first.");
        if (r === 3) return fallback(`Average of ${a * 2}, ${a * 4}, ${a * 6} = ?`, a * 4, "Sum / count.");
        if (r === 4) return fallback(`${a * 3} / ${a} + ${b} = ?`, 3 + b, "Divide first.");
        if (r === 5) return fallback(`0.${a} + 0.${b} = ?`, (a + b) / 10, `(${a}+${b})/10.`);
        if (r === 6) return fallback(`${a * b} / ${b} x ${c} = ?`, a * c, "Left to right.");
        if (r === 7) return fallback(`${a}/${b} of ${b * c} = ?`, a * c, `(${a}/${b}) x ${b * c}.`);
        if (r === 8) return fallback(`${a * 10} - ${b * 3} = ?`, a * 10 - b * 3, "Subtract.");
        if (r === 9) return fallback(`Round ${a}.${b} to nearest int`, a + (b >= 5 ? 1 : 0), "Round up if >= 0.5.");
        if (r === 10) return fallback(`${a} - ${a + b} = ?`, -b, "Negative result.");
        return fallback(`${a} + ${b} + ${c} - ${d} = ?`, a + b + c - d, "Left to right.");
      case 1:
        if (r === 0) return fallback(`${a}x + ${b} = ${a * c + b}, x = ?`, c, `Subtract ${b}, divide by ${a}.`);
        if (r === 1) return fallback(`${a}(x - ${b}) = ${a}, x = ?`, b + 1, `Divide by ${a}, add ${b}.`);
        if (r === 2) return fallback(`y = ${a}x + ${b}, y-intercept = ?`, b, "Constant term.");
        if (r === 3) return fallback(`Ratio ${a}:${b} = ${a * d}:?`, b * d, `Scale by ${d}.`);
        if (r === 4) return fallback(`${a * 10}% of ${b * 10} = ?`, a * b, "Percent x value.");
        if (r === 5) return fallback(`x/2 + ${a} = ${a + 3}, x = ?`, 6, `Subtract ${a}, multiply by 2.`);
        if (r === 6) return fallback(`${a}x + ${b} = ${b}, x = ?`, 0, `Subtract ${b}.`);
        if (r === 7) return fallback(`y = ${a}x + ${b}, x=${c}, y = ?`, a * c + b, `Substitute ${c}.`);
        if (r === 8) return fallback(`${a}/x = ${a}/${b}, x = ?`, b, "Cross multiply.");
        if (r === 9) return fallback(`${a}x + ${b}x = ${(a + b) * c}, x = ?`, c, `Combine: ${a + b}x = ${(a + b) * c}.`);
        if (r === 10) return fallback(`x / ${a} = ${b}, x = ?`, a * b, `Multiply by ${a}.`);
        return fallback(`${a}x - ${b} = ${a * (b + 1) - b}, x = ?`, b + 1, `Add ${b}, divide by ${a}.`);
      case 2:
        if (r === 0) return fallback(`Slope (0,${b}) to (${a}, ${a + b}) = ?`, 1, "Rise/run = 1.");
        if (r === 1) return fallback(`f(x) = ${a}x^2, f(${b}) = ?`, a * b * b, `${a} x ${b}^2.`);
        if (r === 2) return fallback(`x^2 - ${(a + 1) * (a + 1)} = 0, x > 0 = ?`, a + 1, "Diff of squares.");
        if (r === 3) return fallback(`// slope to y = ${a}x + ${b} = ?`, a, "Parallel => same slope.");
        if (r === 4) return fallback(`Solve: x + y = ${a + b}, x - y = ${a - b}. x = ?`, a, "Add equations.");
        if (r === 5) return fallback(`f(x) = ${a}x + ${b}, f(${c}) - f(${d}) = ?`, a * (c - d), `Simplify: ${a}(${c} - ${d}).`);
        if (r === 6) return fallback(`Slope through (${a},${a*b}) and (${2*a},${2*a*b}) = ?`, b, `(${2*a*b}-${a*b})/(${2*a}-${a}).`);
        if (r === 7) return fallback(`f(x) = ${a}x, f(${b}) + f(${c}) = ?`, a * (b + c), `f(${b})+f(${c}).`);
        if (r === 8) return fallback(`x^2 = ${c * c}, x > 0 = ?`, c, `+${c}.`);
        if (r === 9) return fallback(`x-intercept of y = ${a}x + ${b}`, -b / a, "Set y=0.");
        if (r === 10) return fallback(`f(x) = ${a}x + ${b}, f(0) = ?`, b, "y-intercept.");
        return fallback(`y = ${a}x - ${a * c}, x-intercept = ?`, c, "Set y=0.");
      case 3:
        if (r === 0) return fallback(`Circle area r=${a}, pi=3: ?`, 3 * a * a, "pi r^2.");
        if (r === 1) return fallback(`Circum r=${a}, pi=3: ?`, 6 * a, "2 pi r.");
        if (r === 2) return fallback(`Pythag: 3-4-5, legs ${a*3}, ${a*4}: hyp = ?`, a * 5, `3-4-5 scaled by ${a}.`);
        if (r === 3) return fallback(`Vol cylinder r=${a}, h=${b}, pi=3: ?`, 3 * a * a * b, "pi r^2 h.");
        if (r === 4) return fallback(`${a} L = ? mL`, a * 1000, "x1000.");
        if (r === 5) return fallback(`Trap area b1=${a}, b2=${b}, h=${c}: ?`, ((a + b) * c) / 2, "(b1+b2)h/2.");
        if (r === 6) return fallback(`Rect prism ${a}x${b}x${c} vol = ?`, a * b * c, "lwh.");
        if (r === 7) return fallback(`SA cube side ${a} = ?`, 6 * a * a, "6s^2.");
        if (r === 8) return fallback(`${a} ft = ? in`, a * 12, "12 in/ft.");
        if (r === 9) return fallback(`Pythag: legs ${a}, ${b}, hyp? (nearest int)`, Math.round(Math.sqrt(a * a + b * b)), "sqrt(a^2+b^2).");
        if (r === 10) return fallback(`Cylinder vol r=${a}, h=${a}, pi=3: ?`, 3 * a * a * a, "pi r^2 h = 3r^3.");
        return fallback(`Sphere vol r=${a}, pi=3: ?`, 4 * a * a * a, "(4/3)pi r^3 = 4r^3.");
      case 4:
        if (r === 0) return fallback(`sin(30) = ?`, 0.5, "1/2.");
        if (r === 1) return fallback(`cos(60) = ?`, 0.5, "1/2.");
        if (r === 2) return fallback(`tan(45) = ?`, 1, "sin/cos = 1.");
        if (r === 3) return fallback(`sin(45) approx = ?`, 0.71, "sqrt(2)/2.");
        if (r === 4) return fallback(`cos(45) approx = ?`, 0.71, "sqrt(2)/2.");
        if (r === 5) return fallback(`180 deg = ? rad (approx)`, 3.14, "pi rad.");
        if (r === 6) return fallback(`sin(-90) = ?`, -1, "sin odd.");
        if (r === 7) return fallback(`cos(-90) = ?`, 0, "cos even.");
        if (r === 8) return fallback(`Triangle sum = ?`, 180, "180 deg.");
        if (r === 9) return fallback(`Circle = ? deg`, 360, "360 deg.");
        if (r === 10) return fallback(`sin(0) + cos(90) = ?`, 0, "0 + 0.");
        return fallback(`cos(0) - sin(90) = ?`, 0, "1 - 1.");
      case 5:
        if (r === 0) return fallback(`log2(${2 ** a}) = ?`, a, `2^${a}.`);
        if (r === 1) return fallback(`2^${a} x 2^${b} = 2^?`, a + b, "Add exponents.");
        if (r === 2) return fallback(`10^${a} / 10^${b} = 10^?`, a - b, "Subtract exponents.");
        if (r === 3) return fallback(`log10(${10 ** a}) = ?`, a, `10^${a}.`);
        if (r === 4) return fallback(`Sum 1 to ${a} = ?`, (a * (a + 1)) / 2, "n(n+1)/2.");
        if (r === 5) return fallback(`(2^${a})^${b} = 2^?`, a * b, "Multiply exponents.");
        if (r === 6) return fallback(`3^${a} = ?`, 3 ** a, `3^${a}.`);
        if (r === 7) return fallback(`Seq: ${a}, ${a + b}, ${a + 2*b}, next = ?`, a + 3 * b, `Add ${b}.`);
        if (r === 8) return fallback(`2^${a} + 2^${a} = 2^?`, a + 1, "2 x 2^a.");
        if (r === 9) return fallback(`10^3 = ? K (kilo)`, 1, "1000 = 1K.");
        if (r === 10) return fallback(`2^10 = ?`, 1024, "1024.");
        return fallback(`Seq: ${a*b}, ${a*b*2}, ${a*b*3}, next = ?`, a * b * 4, `Multiply by ${a*b}.`);
      case 6:
        if (r === 0) return fallback(`Rate: ${a * 5} to ${a * 10} in ${a}s: rate = ?`, 5, `(${a*10}-${a*5})/${a}.`);
        if (r === 1) return fallback(`d/dx ${a}x^2 at x=${b} = ?`, 2 * a * b, "2ax.");
        if (r === 2) return fallback(`Int ${a} from 0 to ${b} = ?`, a * b, "a x b.");
        if (r === 3) return fallback(`f(t) = ${a}t, f(${b}) = ?`, a * b, `${a} x ${b}.`);
        if (r === 4) return fallback(`Slope of y = ${a}x + ${b} = ?`, a, "Coeff of x.");
        if (r === 5) return fallback(`A ${a * 10}Hz T = ? ms`, Math.round(1000 / (a * 10)), "1000/f.");
        if (r === 6) return fallback(`d/dx ${a}x = ?`, a, "Derivative of ax.");
        if (r === 7) return fallback(`Int ${a} from 0 to ${a} = ?`, a * a, "Area under constant.");
        if (r === 8) return fallback(`f(x) = ${a}x + ${b}, f(x+${c}) - f(x) = ?`, a * c, "Slope x delta.");
        if (r === 9) return fallback(`A ${a * 5}Hz T = ? ms`, Math.round(1000 / (a * 5)), "1000/f.");
        if (r === 10) return fallback(`f(x)=${a}x, f(${b}) + f(${c}) = ?`, a * (b + c), `${a}(${b}+${c}).`);
        return fallback(`Deriv ${a}x^2 at x=${b}: slope = 2*${a}*${b} = ?`, 2 * a * b, "2ax.");
      default:
        return fallback(`${a} + ${b} = ?`, a + b, "Add.");
    }
  }
}

function getFoundationPool(levelIndex, count, difficulty) {
  difficulty = difficulty || "Easy";
  const seed1 = Date.now() + Math.random() * 99999;
  const seed2 = Math.random() * 99999;
  const pool = [];
  for (let i = 0; i < 2000; i++) {
    pool.push(makeFoundationQuestion(seed1 + i * 971 + seed2, levelIndex, (i + seed2 * 7) % 99999 + 1, difficulty));
  }
  return shuffle(pool).slice(0, count);
}

function startFoundationCheckpoint() {
  clearFoundationSession();
  state.fQueue = getFoundationPool(state.foundationsCurrentLevel, state.foundationsQuizLength, state.foundationsLevel);
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
  const fromQuiz = state.foundationsView === "quiz";
  const title = fromQuiz ? "Foundations Quiz" : esc(FOUNDATIONS[state.foundationsCurrentLevel].title);
  const backBtn = fromQuiz ? `<button class="back" id="cancelFoundQuiz">\u2190 Back to quiz setup</button>` : "";
  $("foundationsView").innerHTML = `
    ${backBtn}
    <div class="quiz-box">
      <div class="quiz-top"><span>${title}</span><span>${state.fScore} correct</span></div>
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
  const cancelBtn = $("cancelFoundQuiz");
  if (cancelBtn) cancelBtn.addEventListener("click", () => { clearFoundationSession(); renderFoundations(); });
  const hintBtn = $("fHintButton");
  if (hintBtn) hintBtn.addEventListener("click", () => { state.fShowHint = true; renderFoundationQuestion(); });
  const submitBtn = $("fSubmitAnswer");
  if (submitBtn) submitBtn.addEventListener("click", submitFoundationAnswer);
}

function submitFoundationAnswer() {
  if (state.fFeedback || state.fInput === "") return;
  const q = state.fQueue[state.fIdx];
  const correct = Math.abs(Number.parseFloat(state.fInput) - q.a) < 0.001;
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
  const fromQuiz = state.foundationsView === "quiz";
  if (fromQuiz && state.foundationsQuizTopic !== "All") {
    const level = FOUNDATIONS.find((l) => l.id === state.foundationsQuizTopic);
    if (level) {
      const key = `${state.foundationsLevel}::found::${level.id}`;
      const prevBest = state.foundationsScores[key] || 0;
      const pct = Math.round((state.fScore / state.fQueue.length) * 100);
      state.foundationsScores[key] = Math.max(prevBest, pct);
      saveProgress();
    }
  } else if (!fromQuiz) {
    const level = FOUNDATIONS[state.foundationsCurrentLevel];
    const key = `${state.foundationsLevel}::found::${level.id}`;
    const prevBest = state.foundationsScores[key] || 0;
    const pct = Math.round((state.fScore / state.fQueue.length) * 100);
    state.foundationsScores[key] = Math.max(prevBest, pct);
    saveProgress();
  }
  clearFoundationSession();
  const pct = Math.round((state.fScore / state.fQueue.length) * 100);
  const title = fromQuiz ? "Foundations Quiz" : esc(FOUNDATIONS[state.foundationsCurrentLevel].title);
  const index = state.foundationsCurrentLevel;
  const level = FOUNDATIONS[index];
  const d = state.foundationsLevel;
  let unlockMsg = "";
  if (!fromQuiz && pct >= 80) {
    if (d === "Easy") unlockMsg = `<p style="margin-top:12px;color:var(--green)">Intermediate unlocked for \u201c${esc(level.title)}\u201d!</p>`;
    else if (d === "Intermediate" && index < FOUNDATIONS.length - 1) unlockMsg = `<p style="margin-top:12px;color:var(--green)">\u201c${esc(FOUNDATIONS[index + 1].title)}\u201d unlocked at Easy!</p>`;
    else if (d === "Intermediate") unlockMsg = '<p style="margin-top:12px;color:var(--green)">All chapters completed at Intermediate!</p>';
    else if (d === "Advanced") unlockMsg = '<p style="margin-top:12px;color:var(--green)">Chapter mastered at Advanced!</p>';
  }
  $("foundationsView").innerHTML = `
    <div class="result-card">
      <h2>${pct >= 80 ? "Great job!" : "Keep studying."}</h2>
      <div class="result-score">${state.fScore}<span style="font-size:2rem;color:var(--dim)"> / ${state.fQueue.length}</span></div>
      <p class="section-intro">${pct}% score on ${title}.</p>
      ${unlockMsg}
      <div class="result-actions">
        <button class="primary" id="fBackQuizHome">${fromQuiz ? "Back to quiz setup" : "Back to level"}</button>
        <button class="secondary" id="fBackQuizAll">${fromQuiz ? "All levels" : "All levels"}</button>
      </div>
    </div>`;
  $("fBackQuizHome").addEventListener("click", () => fromQuiz ? renderFoundations() : renderFoundationLevel(state.foundationsCurrentLevel));
  $("fBackQuizAll").addEventListener("click", renderFoundations);
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
  const sub = state.cs50SubTab;
  $("cs50View").innerHTML = `
    <nav class="study-sub-tabs">
      <button class="sub-tab ${sub === "weeks" ? "active" : ""}" data-csub="weeks">Weeks</button>
      <button class="sub-tab ${sub === "quiz" ? "active" : ""}" data-csub="quiz">Quiz</button>
    </nav>
    <div id="cs50SubContent"></div>`;
  document.querySelectorAll("[data-csub]").forEach((btn) => btn.addEventListener("click", () => {
    state.cs50SubTab = btn.dataset.csub;
    renderCS50();
  }));
  if (sub === "weeks") renderCS50Weeks();
  else renderCS50QuizSetup();
}

function renderCS50Weeks() {
  $("cs50SubContent").innerHTML = `
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
      renderCS50Weeks();
    });
  });
  document.querySelectorAll(".cs50-card:not(.locked)").forEach((card) => {
    card.addEventListener("click", () => renderCS50Week(card.dataset.cs50));
  });
}

function renderCS50QuizSetup() {
  const onAll = state.cs50QuizTopic === "All";
  const currentId = onAll ? null : state.cs50QuizTopic;
  if (currentId && !isCS50QuizDifficultyUnlocked(currentId, state.cs50Level)) {
    const fallback = CS50_LEVELS.find((l) => isCS50QuizDifficultyUnlocked(currentId, l)) || "Easy";
    state.cs50Level = fallback;
  } else if (onAll && !isCS50DifficultyUnlocked(state.cs50Level)) {
    const fallback = CS50_LEVELS.find((l) => isCS50DifficultyUnlocked(l)) || "Easy";
    state.cs50Level = fallback;
  }
  const weekIds = CS50_WEEKS.map((w) => w.id);
  const unlockedWeekIds = weekIds.filter((_, i) => isCS50QuizWeekUnlocked(i));
  const saved = localStorage.getItem("firmwareMathCS50Session");
  let resumeHtml = "";
  if (saved) {
    try {
      const s = JSON.parse(saved);
      if (s.queue && s.queue.length && !s.cs50CurrentWeek) {
        const cur = (s.cs50QIdx ?? 0) + 1;
        resumeHtml = `<div class="resume-card"><span>Unfinished quiz · Q${cur}/${s.queue.length} · ${s.cs50Score ?? 0} correct</span><div><button class="primary" id="cs50QuizResumeBtn">Resume</button><button class="secondary" id="cs50QuizDiscardBtn" style="margin-left:8px">Start from first</button></div></div>`;
      }
    } catch {}
  }
  $("cs50SubContent").innerHTML = `
    <p class="section-intro">Progress through Easy → Intermediate → Advanced per week, then unlock the next week.</p>
    ${resumeHtml}
    <div class="track-switch" aria-label="cs50 difficulty">
      ${CS50_LEVELS.map((level) => {
        const locked = currentId ? !isCS50QuizDifficultyUnlocked(currentId, level) : !isCS50DifficultyUnlocked(level);
        return `<button class="track-button ${state.cs50Level === level ? "active" : ""} ${locked ? "locked" : ""}" data-cqtrack="${level}" ${locked ? "disabled" : ""}>${level}${locked ? " locked" : ""}</button>`;
      }).join("")}
    </div>
    <div class="filter-panel">
      <div><div class="filter-title">TOPIC</div><div class="filter-buttons">${["All", ...unlockedWeekIds].map((id) => {
        const label = id === "All" ? "All" : CS50_WEEKS.find((w) => w.id === id).title;
        return `<button class="filter-button ${state.cs50QuizTopic === id ? "active" : ""}" data-cqtopic="${id}">${esc(label)}</button>`;
      }).join("")}</div></div>
      <div><div class="filter-title">EXAM LENGTH</div><div class="length-buttons">${EXAM_LENGTHS.map((count) => `<button class="length-button ${state.cs50QuizLength === count ? "active" : ""}" data-clength="${count}">${count}</button>`).join("")}</div></div>
      <button class="primary" id="startCS50QuizSetup">Start Exam (${state.cs50QuizLength} questions) \u2192</button>
    </div>`;
  if (resumeHtml) {
    $("cs50QuizResumeBtn").addEventListener("click", () => {
      restoreCS50Session();
      renderCS50Question();
    });
    $("cs50QuizDiscardBtn").addEventListener("click", () => {
      clearCS50Session();
      renderCS50QuizSetup();
    });
  }
  document.querySelectorAll("[data-cqtrack]").forEach((btn) => {
    const chk = onAll ? isCS50DifficultyUnlocked(btn.dataset.cqtrack) : isCS50QuizDifficultyUnlocked(state.cs50QuizTopic, btn.dataset.cqtrack);
    if (!chk) return;
    btn.addEventListener("click", () => {
      state.cs50Level = btn.dataset.cqtrack;
      renderCS50QuizSetup();
    });
  });
  document.querySelectorAll("[data-clength]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.cs50QuizLength = Number(btn.dataset.clength);
      localStorage.setItem("firmwareMathCS50Length", state.cs50QuizLength);
      renderCS50QuizSetup();
    });
  });
  $("startCS50QuizSetup").addEventListener("click", startCS50QuizFromSetup);
}

function startCS50QuizFromSetup() {
  clearCS50Session();
  let pool = [];
  const difficulty = state.cs50Level;
  if (state.cs50QuizTopic === "All") {
    for (const week of CS50_WEEKS) {
      const idx = CS50_WEEKS.indexOf(week);
      if (isCS50QuizWeekUnlocked(idx)) {
        pool = pool.concat(getCS50Quiz(week.id, difficulty));
      }
    }
  } else {
    const idx = CS50_WEEKS.findIndex((w) => w.id === state.cs50QuizTopic);
    if (idx >= 0) {
      pool = getCS50Quiz(state.cs50QuizTopic, difficulty);
    }
  }
  if (!pool.length) { renderCS50QuizSetup(); return; }
  state.cs50Queue = shuffle(pool).slice(0, Math.min(state.cs50QuizLength, pool.length));
  state.cs50QIdx = 0;
  state.cs50Input = "";
  state.cs50Feedback = null;
  state.cs50ShowHint = false;
  state.cs50Score = 0;
  state.cs50CurrentWeek = null;
  saveCS50Session();
  renderCS50Question();
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
  $("backToCS50").addEventListener("click", () => { state.cs50CurrentWeek = null; state.cs50Queue = []; state.cs50SubTab = "weeks"; renderCS50(); });
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
  const fromQuizSetup = state.cs50SubTab === "quiz" && !state.cs50CurrentWeek;
  const week = fromQuizSetup ? null : CS50_WEEKS.find((w) => w.id === state.cs50CurrentWeek);
  const label = fromQuizSetup ? "Back to quiz setup" : "Back to week";
  $("cs50View").innerHTML = `
    <button class="back" id="cancelCS50Quiz">\u2190 ${label}</button>
    <div class="quiz-box">
      <div class="quiz-top"><span>Quiz: ${esc(week ? week.title : "CS50x")}</span><span>${state.cs50Score} correct</span></div>
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
    clearCS50Session();
    if (fromQuizSetup) {
      renderCS50();
    } else {
      const weekId = state.cs50CurrentWeek;
      state.cs50CurrentWeek = null;
      state.cs50Queue = [];
      renderCS50Week(weekId);
    }
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
  const correct = Math.abs(Number.parseFloat(state.cs50Input) - q.a) < 0.001;
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
  const fromQuizSetup = !week;
  state.cs50CurrentWeek = null;
  state.cs50Queue = [];
  if (week) {
    const key = `${state.cs50Level}::cs50::${week.id}`;
    const prevBest = state.cs50Progress[key] || 0;
    state.cs50Progress[key] = Math.max(prevBest, pct);
    saveProgress();
  } else if (state.cs50QuizTopic !== "All") {
    const w = CS50_WEEKS.find((ww) => ww.id === state.cs50QuizTopic);
    if (w) {
      const key = `${state.cs50Level}::cs50::${w.id}`;
      const prevBest = state.cs50Progress[key] || 0;
      state.cs50Progress[key] = Math.max(prevBest, pct);
      saveProgress();
    }
  }
  const passed = pct >= 80;
  const weekIndex = week ? CS50_WEEKS.indexOf(week) : -1;
  const nextUnlocked = passed && weekIndex >= 0 && weekIndex < CS50_WEEKS.length - 1;
  $("cs50View").innerHTML = `
    <div class="result-card">
      <h2>${passed ? "Week passed!" : "Keep studying."}</h2>
      <div class="result-score">${state.cs50Score}<span style="font-size:2rem;color:var(--dim)"> / ${totalQ}</span></div>
      <p class="section-intro">${pct}% score${week ? " on " + esc(week.title) : " on CS50x quiz"}. ${passed ? (nextUnlocked ? esc(CS50_WEEKS[weekIndex + 1].title) + " is now unlocked." : weekIndex >= CS50_WEEKS.length - 1 ? "You completed all Cs50x weeks!" : "Week mastered.") : "Score 80% or higher to unlock the next week."}</p>
      <div class="result-actions">
        <button class="primary" id="cs50BackToWeek">${fromQuizSetup ? "Back to quiz setup" : "Back to week"}</button>
        <button class="secondary" id="cs50BackToAll">${fromQuizSetup ? "All weeks" : "All weeks"}</button>
      </div>
    </div>`;
  $("cs50BackToWeek").addEventListener("click", () => fromQuizSetup ? renderCS50() : renderCS50Week(weekId));
  $("cs50BackToAll").addEventListener("click", renderCS50);
}

document.querySelectorAll(".tab").forEach((button) => button.addEventListener("click", () => switchTab(button.dataset.tab)));

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
