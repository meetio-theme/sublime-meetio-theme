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
