class MyClass:
    "This is my second class"
    a = 10
    def func(self):
        print('Hello')

# create a new MyClass
ob = MyClass()

# Output: <function MyClass.func at 0x000000000335B0D0>
print(MyClass.func)

# Output: <bound method MyClass.func of <__main__.MyClass object at 0x000000000332DEF0>>
print(ob.func)

# Calling function func()
# Output: Hello
ob.func()

def ask_ok(prompt, retries = 4, reminder = 'Please try again!'):
    while True:
        ok = input(prompt)
        if ok in ('y', 'ye', 'yes'):
            return True
        if ok in ('n', 'no', 'nop', 'nope'):
            return False
        retries = retries - 1
        if retries < 0:
            raise ValueError('invalid user response')
        print(reminder)

def copy(
    src_path: str,
    dst_path: str,
    data: Optional[dict] = None,
    *,
    exclude: Optional[List[str]] = None,
    include: Optional[List[str]] = None,
    pretend: bool = False,
    force: bool = False,
    skip: bool = False,
    quiet: bool = False,
) -> None:
    pass
