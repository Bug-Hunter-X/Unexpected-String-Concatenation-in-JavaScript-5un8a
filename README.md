# Unexpected String Concatenation in JavaScript

This example demonstrates a common issue in JavaScript where the `+` operator performs string concatenation instead of numerical addition when one of the operands is a string.

## Bug

The `foo` function is intended to add two numbers. However, when passed a number and a string, it concatenates them instead of adding them numerically.

## Solution

The solution involves explicitly converting the operands to numbers using `parseInt` or `Number` before performing the addition. This ensures the addition is performed numerically.