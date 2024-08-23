import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

 async function insertUser(username: string, password: string, firstName: string, lastName: string){
    const user = await prisma.user.create({
        data: {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}
    