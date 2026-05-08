**Declaring an Array**

PowerShell offers several methods for array creation. The most explicit form uses the array subexpression operator, `@()`:

```powershell
$colors = @("red", "green", "blue")
```

A comma-separated list of values will also implicitly construct an array:

```powershell
$numbers = 1, 2, 3, 4, 5
```

For scenarios requiring strict data integrity, strongly-typed arrays constrain all elements to a specified type, reducing the risk of runtime errors:

```powershell
[int[]]$typed = 10, 20, 30
```

This is particularly valuable in production scripts where unexpected data types could produce silent failures downstream.

---

**Accessing Elements**

Arrays in PowerShell are zero-indexed. The first element is accessed at index `0`, and negative indices count backward from the end, meaning `[-1]` always references the last element — a convenient shorthand that eliminates the need to calculate length manually.

```powershell
$colors[0]    # "red"
$colors[-1]   # "blue"
$colors[1..2] # "green", "blue"
```

PowerShell also supports range-based access using the `..` operator, making it straightforward to extract a contiguous slice in a single expression. For non-contiguous selections, comma-separated indices return exactly the elements specified.

---

**Common Properties and Operators**

Arrays expose several built-in properties and support native operators that make them practical without requiring additional tooling. The `.Count` and `.Length` properties both return the number of elements. The `-contains` operator evaluates membership cleanly within conditional logic:

```powershell
$colors.Count           # 3
$colors -contains "red" # True
$colors.IndexOf("green") # 1
```

These are preferable to manual iteration for simple membership checks, both for readability and performance.

---

**Iterating Over an Array**

The `foreach` loop and the `ForEach-Object` cmdlet are the two primary mechanisms for traversing array elements. Within the pipeline, `Where-Object` enables concise, readable filtering — an idiomatic approach well-suited to PowerShell's pipeline-centric design:

```powershell
foreach ($item in $colors) {
    Write-Output $item
}

$colors | ForEach-Object { Write-Output $_ }

$numbers | Where-Object { $_ -gt 2 }
```

For most scripting contexts, `foreach` is preferable for clarity. The pipeline form becomes advantageous when chaining multiple operations or working with cmdlet output directly.

---

**Modifying Arrays and Dynamic Sizing**

By default, PowerShell arrays are fixed in size. Individual elements can be reassigned by index, but the array's length cannot be changed after creation. The `+=` operator offers a workaround — appending an element by constructing an entirely new array behind the scenes:

```powershell
$colors += "yellow"
```

While convenient for small collections, this approach carries a meaningful performance cost in loops or large datasets, as each call allocates new memory. When dynamic resizing is a requirement, `System.Collections.ArrayList` is the recommended alternative:

```powershell
$list = [System.Collections.ArrayList]@()
$list.Add("red")
$list.Remove("red")
```

`ArrayList` provides native `Add()` and `Remove()` methods with significantly better performance at scale. It is worth noting, however, that `ArrayList` is an untyped collection — if type safety matters, `System.Collections.Generic.List[T]` offers both dynamic sizing and strict typing.

---

**Multidimensional Arrays**

PowerShell supports two approaches to multidimensional data. Jagged arrays — arrays whose elements are themselves arrays — are the more common and flexible form:

```powershell
$matrix = @(@(1, 2, 3), @(4, 5, 6))
$matrix[0][1]  # 2
```

True two-dimensional arrays, created via `New-Object`, enforce a fixed, uniform grid structure and are accessed using comma-separated indices:

```powershell
$grid = New-Object 'int[,]' 3,3
$grid[0,0] = 1
```

Jagged arrays are generally more idiomatic in PowerShell scripting. True 2D arrays are best reserved for scenarios where a rigid, rectangular data structure is explicitly required.

---
