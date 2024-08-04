class Range:
    def __init__(self, current, end, step=1):
        self.current = current
        self.end = end
        self.step = step

    def __iter__(self):
        return self

    def __next__(self):
        if self.current < self.end:
            num = self.current
            self.current += self.step
            return num
        raise StopIteration


iRange = Range(1, 30)
for num in iRange:
    print(num)
