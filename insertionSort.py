def InsertionSort(a):
    for i in range(1, len(a)):
        temp = a[i]
        j = i - 1
        while j >= 0 and temp < a[j]:
            a[j + 1] = a[j]
            j = j-1
            a[j + i] = temp

def printArr(a):
    for i in range(len(a)):
        print(a[i], end = " ")

a = [23 ,64 ,12 ,5 ,67 ]
print("Before sorting: ")
printArr(a)
InsertionSort(a)
print("\nAfter Sorting: ")
printArr(a)
