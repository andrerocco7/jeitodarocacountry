-- AlterTable
ALTER TABLE `Category` MODIFY `game` ENUM('VALORANT', 'FREEFIRE', 'CSGO', 'FORTNITE', 'PLANOS', 'PC_FREEFIRE', 'PC_LEGIT', 'OUTROS_JOGOS', 'IOS_SEM_PC', 'PC', 'ANDROID_MOD_INJECTOR') NOT NULL;

-- AlterTable
ALTER TABLE `Product` MODIFY `game` ENUM('VALORANT', 'FREEFIRE', 'CSGO', 'FORTNITE', 'PLANOS', 'PC_FREEFIRE', 'PC_LEGIT', 'OUTROS_JOGOS', 'IOS_SEM_PC', 'PC', 'ANDROID_MOD_INJECTOR') NOT NULL;