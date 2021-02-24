import React from 'react'
import { MainDashboardContainer } from '../styles/MainDashboardStyles'
import OptionCard from './OptionCard'
import { colors } from "../utils/definitions"
import { FaEdit, FaVideo, FaUserLock, FaBook, FaPhotoVideo, FaHistory, FaComments } from 'react-icons/fa'

const MainDashboard = () => {
    return (
        <MainDashboardContainer>
            <OptionCard
                iconColor={colors.sweetRed}
                FaItemElement={<FaEdit class='faicon' />}
                text='Take a test'
                href='/subjects'
            />

            <OptionCard
                iconColor={colors.sweetBlue}
                FaItemElement={<FaVideo class='faicon' />}
                text='Enter a class'
            />

            <OptionCard
                iconColor={colors.lightBrown}
                FaItemElement={<FaUserLock class='faicon' />}
                text='View your profile'
            />
            <OptionCard
                iconColor={colors.dye}
                FaItemElement={<FaBook class='faicon' />}
                text='Read Books'
            />
            <OptionCard
                iconColor={colors.orange}
                FaItemElement={<FaPhotoVideo class='faicon' />}
                text='Re-watch previous classes'
            />
            <OptionCard
                iconColor={colors.orchid}
                FaItemElement={<FaHistory class='faicon' />}
                text='Do revision'
            />
            <OptionCard
                iconColor={colors.gold}
                FaItemElement={<FaComments class='faicon' />}
                text='Talk to a teacher'
            />
        </MainDashboardContainer>
    )
}

export default MainDashboard
