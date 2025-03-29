function calculateComplexity() {
    let algo = document.getElementById("algorithm").value.toLowerCase();
    let complexities = {
        "bubble sort": { time: "O(n²)", space: "O(1)" },
        "insertion sort": { time: "O(n²)", space: "O(1)" },
        "selection sort": { time: "O(n²)", space: "O(1)" },
        "merge sort": { time: "O(n log n)", space: "O(n)" },
        "quick sort": { time: "O(n log n)", space: "O(log n)" },
        "heap sort": { time: "O(n log n)", space: "O(1)" },
        "linear search": { time: "O(n)", space: "O(1)" },
        "binary search": { time: "O(log n)", space: "O(1)" }
    };

    if (complexities[algo]) {
        document.getElementById("result").innerHTML = `
            <p>Time Complexity: ${complexities[algo].time}</p>
            <p>Space Complexity: ${complexities[algo].space}</p>
        `;
    } else {
        document.getElementById("result").innerHTML = "Algorithm not found. Try another one.";
    }
}
